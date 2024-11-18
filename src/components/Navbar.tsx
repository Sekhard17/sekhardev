import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faTools,
  faGraduationCap,
  faLightbulb,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './AuthContext';
import ThemeToggle from './ThemeToggle';
import AuthModal from './AuthModal';
import { UserMenu } from './UserMenu';

const navItems = [
  { path: '/', label: 'Inicio', icon: faHome },
  { path: '/herramientas', label: 'Herramientas', icon: faTools },
  { path: '/cursos', label: 'Cursos', icon: faGraduationCap },
  { path: '/recursos', label: 'Recursos', icon: faLightbulb }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Left side navigation */}
            <ul className="flex items-center gap-8">
              {navItems.slice(0, 2).map(item => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Logo center */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Sekhard.dev
              </span>
            </a>

            {/* Right side navigation */}
            <div className="flex items-center gap-8">
              {navItems.slice(2).map(item => (
                <a
                  key={item.path}
                  href={item.path}
                  className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}

              <div className="flex items-center gap-4">
                <ThemeToggle />
                {user ? (
                  <UserMenu user={user} />
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}