import { useState, useCallback } from 'react';
import { FormDataType, DEFAULT_FORM_DATA } from '../constants/defaultFormData';

const useFormData = () => {
  const [formData, setFormData] = useState<FormDataType>(DEFAULT_FORM_DATA);

  const handleInputChange = useCallback((name: keyof FormDataType, value: string) => {
    // 触发自定义事件，保存滚动位置
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('beforeStateChange'));
    }
    
    // 直接设置值，不进行任何验证
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 在状态更新后，触发恢复滚动位置事件
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('afterStateChange'));
      }
    }, 0);
  }, []);

  // 更新教育系数，不触发滚动逻辑
  const updateEducationFactor = useCallback((factor: string) => {
    if (formData.education !== factor) {
      setFormData(prev => ({
        ...prev,
        education: factor
      }));
    }
  }, [formData.education]);

  return {
    formData,
    handleInputChange,
    updateEducationFactor
  };
};

export default useFormData; 