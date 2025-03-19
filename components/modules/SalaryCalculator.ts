import { FormDataType } from '../constants/defaultFormData';
import { calculateWorkingDays } from './WorkingDaysCalculator';

// 计算标准化后的日薪
export const calculateDailySalary = (formData: FormDataType): number => {
  if (!formData.annualSalary) return 0;
  
  const workingDays = calculateWorkingDays(formData);
  
  // 应用PPP转换因子标准化薪资
  // 中国地区直接使用默认值4.19，其他地区使用用户输入的PPP
  const pppFactor = formData.country === 'china' ? 4.19 : (Number(formData.pppFactor) || 4.19);
  const standardizedSalary = Number(formData.annualSalary) * (4.19 / pppFactor);
  
  return workingDays > 0 ? standardizedSalary / workingDays : 0;
};

// 获取显示用的日薪（转回原始货币）
export const getDisplaySalary = (formData: FormDataType): string => {
  const dailySalaryInCNY = calculateDailySalary(formData);
  
  if (formData.country === 'china') {
    return dailySalaryInCNY.toFixed(2);
  } else {
    // 非中国地区，转回本地货币
    const pppFactor = Number(formData.pppFactor) || 4.19;
    return (dailySalaryInCNY * pppFactor / 4.19).toFixed(2);
  }
}; 