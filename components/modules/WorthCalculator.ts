import { FormDataType } from '../constants/defaultFormData';
import { calculateDailySalary } from './SalaryCalculator';
import { calculateEducationFactor } from './EducationFactorCalculator';
import { calculateExperienceFactor } from './ExperienceFactorCalculator';
import { calculateEnvironmentFactor, calculateEffectiveCommuteHours } from './EnvironmentFactorCalculator';

// 计算工作性价比
export const calculateWorth = (formData: FormDataType): number => {
  if (!formData.annualSalary) return 0;
  
  const dailySalary = calculateDailySalary(formData);
  const workHours = Number(formData.workHours);
  const restTime = Number(formData.restTime);
  const effectiveCommuteHours = calculateEffectiveCommuteHours(formData);
  
  // 计算环境因素
  const environmentFactor = calculateEnvironmentFactor(formData);
  
  // 获取教育系数
  const educationFactor = calculateEducationFactor(formData);
  
  // 获取经验系数
  const experienceFactor = calculateExperienceFactor(formData);
  
  // 薪资满意度应该受到经验薪资倍数的影响
  // 相同薪资，对于高经验者来说价值更低，对应的计算公式需要考虑经验倍数
  return (dailySalary * environmentFactor) / 
         (35 * (workHours + effectiveCommuteHours - 0.5 * restTime) * educationFactor * experienceFactor);
};

// 评估工作性价比并给出评价
export const getValueAssessment = (value: number, hasSalary: boolean): { text: string; color: string } => {
  if (!hasSalary) return { text: "请输入年薪", color: "text-gray-500" };
  if (value < 0.6) return { text: "惨绝人寰", color: "text-pink-800" };
  if (value < 1.0) return { text: "略惨", color: "text-red-500" };
  if (value <= 1.8) return { text: "一般", color: "text-orange-500" };
  if (value <= 2.5) return { text: "还不错", color: "text-blue-500" };
  if (value <= 3.2) return { text: "很爽", color: "text-green-500" };
  if (value <= 4.0) return { text: "爽到爆炸", color: "text-purple-500" };
  return { text: "人生巅峰", color: "text-yellow-400" };
}; 