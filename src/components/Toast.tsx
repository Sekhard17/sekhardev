import toast, { Toaster } from 'react-hot-toast';

export const notify = {
  success: (message: string) => toast.success(message, {
    style: {
      background: '#10B981',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#10B981',
    },
  }),
  
  error: (message: string) => toast.error(message, {
    style: {
      background: '#EF4444',
      color: '#fff',
    },
    iconTheme: {
      primary: '#fff',
      secondary: '#EF4444',
    },
  }),
  
  loading: (message: string) => toast.loading(message, {
    style: {
      background: '#6366F1',
      color: '#fff',
    },
  }),
};

export default function Toast() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: '',
        duration: 3000,
        style: {
          borderRadius: '10px',
          padding: '16px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      }}
    />
  );
}