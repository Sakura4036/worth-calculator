import { FormDataType } from '../constants/defaultFormData';

// 根据工作年限和工作类型计算经验薪资倍数
export const calculateExperienceFactor = (formData: FormDataType): number => {
  const workYears = Number(formData.workYears);
  
  // 基准薪资增长曲线（适用于私企）
  let baseSalaryMultiplier = 1.0;
  if (workYears === 0) baseSalaryMultiplier = 1.0;         // 应届生基准值
  else if (workYears === 1) baseSalaryMultiplier = 1.2;    // 1年：1.50-2.00，取中间值
  else if (workYears <= 3) baseSalaryMultiplier = 1.5;     // 2-3年：2.20-2.50，取中间值
  else if (workYears <= 5) baseSalaryMultiplier = 2.0;     // 4-5年：2.70-3.00，取中间值
  else if (workYears <= 8) baseSalaryMultiplier = 2.5;     // 6-8年：3.20-3.50，取中间值
  else if (workYears <= 10) baseSalaryMultiplier = 3.0;    // 9-10年：3.60-3.80，取中间值
  else baseSalaryMultiplier = 3.5;                         // 11-13年：3.90-4.20，取中间值
  
  // 工作单位类型对涨薪幅度的影响系数
  let salaryGrowthFactor = 1.0;  // 私企基准
  if (formData.jobStability === 'foreign') {
    salaryGrowthFactor = 0.8;    // 外企涨薪幅度为私企的80%
  } else if (formData.jobStability === 'state') {
    salaryGrowthFactor = 0.5;    // 央/国企涨薪幅度为私企的50%
  } else if (formData.jobStability === 'government') {
    salaryGrowthFactor = 0.3;    // 体制内涨薪幅度为私企的30%
  }
  
  // 根据公式: 1 + (对应幅度-1) * 工作单位系数，计算最终薪资倍数
  return 1 + (baseSalaryMultiplier - 1) * salaryGrowthFactor;
}; 