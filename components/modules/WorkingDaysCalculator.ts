import { FormDataType } from '../constants/defaultFormData';

export const calculateWorkingDays = (formData: FormDataType): number => {
  const weeksPerYear = 52;
  const totalWorkDays = weeksPerYear * Number(formData.workDaysPerWeek); // 确保转换为数字
  const totalLeaves = Number(formData.annualLeave) + 
                     Number(formData.publicHolidays) + 
                     Number(formData.paidSickLeave) * 0.6; // 带薪病假按60%权重计算
  
  return Math.max(totalWorkDays - totalLeaves, 0);
}; 