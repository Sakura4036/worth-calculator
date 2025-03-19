import { FormDataType } from '../constants/defaultFormData';

// 计算环境系数
export const calculateEnvironmentFactor = (formData: FormDataType): number => {
  // 工作环境因素，包含食堂和家乡因素
  const canteenFactor = Number(formData.canteen);
  // 在家乡工作有额外加成
  const homeTownFactor = formData.homeTown === 'yes' ? 1.4 : 1.0;
  
  return Number(formData.workEnvironment) * 
         Number(formData.leadership) * 
         Number(formData.teamwork) *
         Number(formData.cityFactor) *
         canteenFactor *
         homeTownFactor;
};

// 计算有效通勤时间
export const calculateEffectiveCommuteHours = (formData: FormDataType): number => {
  const commuteHours = Number(formData.commuteHours);
  
  // 确保正确转换为数字，使用parseFloat可以更可靠地处理字符串转数字
  const workDaysPerWeek = parseFloat(formData.workDaysPerWeek) || 5;
  
  // 允许wfhDaysPerWeek为空字符串，计算时才处理为0
  const wfhInput = formData.wfhDaysPerWeek.trim();
  const wfhDaysPerWeek = wfhInput === '' ? 0 : Math.min(parseFloat(wfhInput) || 0, workDaysPerWeek);
  
  // 确保有办公室工作天数时才计算比例，否则设为0
  const officeDaysRatio = workDaysPerWeek > 0 ? (workDaysPerWeek - wfhDaysPerWeek) / workDaysPerWeek : 0;
  
  // 通勤时间按办公室工作比例计算，并考虑班车因素
  const shuttleFactor = Number(formData.shuttle);
  
  return commuteHours * officeDaysRatio * shuttleFactor;
}; 