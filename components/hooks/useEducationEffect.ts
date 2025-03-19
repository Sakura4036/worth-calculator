import { useEffect } from 'react';
import { FormDataType } from '../constants/defaultFormData';
import { calculateEducationFactor } from '../modules/EducationFactorCalculator';

const useEducationEffect = (
  formData: FormDataType,
  updateEducationFactor: (factor: string) => void
) => {
  // 在组件初始化和学历选择变化时计算教育系数
  useEffect(() => {
    const educationFactor = calculateEducationFactor(formData);
    updateEducationFactor(educationFactor.toString());
  }, [formData.degreeType, formData.schoolType, formData.bachelorType, updateEducationFactor, formData]);
};

export default useEducationEffect; 