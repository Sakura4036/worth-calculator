import { useRef, useEffect } from 'react';

const useScrollPosition = () => {
  const scrollPositionRef = useRef(0);
  
  useEffect(() => {
    const handleBeforeStateChange = () => {
      // 保存当前滚动位置
      if (typeof window !== 'undefined') {
        scrollPositionRef.current = window.scrollY;
      }
    };

    const handleAfterStateChange = () => {
      // 恢复滚动位置
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          window.scrollTo(0, scrollPositionRef.current);
        }, 0);
      }
    };

    // 添加到全局事件
    window.addEventListener('beforeStateChange', handleBeforeStateChange);
    window.addEventListener('afterStateChange', handleAfterStateChange);

    return () => {
      // 清理事件监听器
      window.removeEventListener('beforeStateChange', handleBeforeStateChange);
      window.removeEventListener('afterStateChange', handleAfterStateChange);
    };
  }, []);
  
  return scrollPositionRef;
};

export default useScrollPosition; 