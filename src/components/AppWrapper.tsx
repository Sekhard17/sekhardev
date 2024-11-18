import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Toast from './Toast';

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <AuthProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <Toast />
        <main className="pt-20 pb-24 md:pb-0">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}