import toast from 'react-hot-toast';

const useToast = () => {
  const error = (message: string) => {
    toast.error(message, { position: 'bottom-left' });
  };

  const success = (message: string) => {
    toast.success(message, { position: 'bottom-left' });
  };

  return { error, success };
};

export default useToast;
