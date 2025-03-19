import { useEffect } from 'react';

const useRedirect = () => {
  useEffect(() => {
    // 在所有环境中执行重定向
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname !== 'jobworth.zippland.com' && hostname !== 'localhost' && !hostname.includes('127.0.0.1')) {
        window.location.href = 'https://jobworth.zippland.com' + window.location.pathname;
      }
    }
  }, []);
};

export default useRedirect; 