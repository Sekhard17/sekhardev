import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faEnvelope,
  faGlobe,
  faEdit,
  faSave,
  faCamera,
  faSpinner,
  faCheck,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from './AuthContext';
import { updateProfile } from '../lib/supabase';
import { notify } from './Toast';

export default function ProfileEditor() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="text-center py-8">
          <FontAwesomeIcon icon={faUser} className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            Por favor, inicia sesión para ver tu perfil.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openAuthModal'))}
            className="mt-4 inline-block px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }

  // Resto del componente para usuario autenticado...
}