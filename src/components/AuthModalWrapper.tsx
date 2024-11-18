import { useState, useEffect } from 'react';
import AuthModal from './AuthModal';

export default function AuthModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener('openAuthModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openAuthModal', handleOpenModal);
    };
  }, []);

  return (
    <AuthModal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)} 
    />
  );
} 