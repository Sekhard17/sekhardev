import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './AuthContext';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  path: string;
  label: string;
  icon: any;
}

interface Props {
  items: NavItem[];
}

export default function MobileNav({ items }: Props) {
  const [activeItem, setActiveItem] = useState('/');
  const { user } = useAuth();

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"></div>
      
      {/* Navigation items */}
      <div className="relative container mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          {items.map((item) => {
            const isActive = activeItem === item.path;
            
            return (
              <a
                key={item.path}
                href={item.path}
                className="relative group py-2 px-4"
                onClick={() => setActiveItem(item.path)}
              >
                <div className="flex flex-col items-center">
                  <div className={`
                    relative p-2 rounded-xl transition-all duration-300
                    ${isActive ? 'bg-primary-100 dark:bg-primary-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
                  `}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                  </div>
                  
                  <span className={`text-xs mt-1 transition-colors duration-300 ${
                    isActive ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </div>

                {/* Hover indicator */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-1 right-0 w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}

          {/* Profile Link */}
          {user && (
            <a
              href="/perfil"
              className="relative group py-2 px-4"
              onClick={() => setActiveItem('/perfil')}
            >
              <div className="flex flex-col items-center">
                <div className={`
                  relative p-2 rounded-xl transition-all duration-300
                  ${activeItem === '/perfil' ? 'bg-primary-100 dark:bg-primary-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
                `}>
                  {user.avatar_url ? (
                    <img
                      src={user.avatar_url}
                      alt={user.full_name}
                      className="w-5 h-5 rounded-full"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      className={`w-5 h-5 transition-colors duration-300 ${
                        activeItem === '/perfil' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    />
                  )}
                </div>
                <span className={`text-xs mt-1 transition-colors duration-300 ${
                  activeItem === '/perfil' ? 'text-primary-600 dark:text-primary-400 font-medium' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  Perfil
                </span>
              </div>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}