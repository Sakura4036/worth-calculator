import { FormDataType } from '../constants/defaultFormData';

// 根据学位类型和学校类型计算教育系数
export const calculateEducationFactor = (formData: FormDataType): number => {
  const degreeType = formData.degreeType;
  const schoolType = formData.schoolType;
  const bachelorType = formData.bachelorType;
  
  // 使用更简单的方式计算系数，避免复杂的索引类型问题
  let factor = 1.0; // 默认值
  
  // 专科及以下固定为0.8
  if (degreeType === 'belowBachelor') {
    factor = 0.8;
  } 
  // 本科学历
  else if (degreeType === 'bachelor') {
    if (schoolType === 'secondTier') factor = 1.0;       // 二本三本
    else if (schoolType === 'firstTier') factor = 1.2;   // 双非/QS100/USnews50
    else if (schoolType === 'elite') factor = 1.4;       // 211/QS50/USnews30
    else if (schoolType === 'superElite') factor = 1.6;       // 985/QS30/USnews20
  } 
  // 硕士学历 - 考虑本科背景
  else if (degreeType === 'masters') {
    // 先获取本科背景的基础系数
    let bachelorBaseCoefficient = 0;
    if (bachelorType === 'secondTier') bachelorBaseCoefficient = 1.0;       // 二本三本
    else if (bachelorType === 'firstTier') bachelorBaseCoefficient = 1.2;   // 双非/QS100/USnews50
    else if (bachelorType === 'elite') bachelorBaseCoefficient = 1.4;       // 211/QS50/USnews30
    else if (bachelorType === 'superElite') bachelorBaseCoefficient = 1.6;       // 985/QS30/USnews20

    
    // 再计算硕士学校的加成系数
    let mastersBonus = 0;
    if (schoolType === 'secondTier') mastersBonus = 0.2;       // 二本三本硕士
    else if (schoolType === 'firstTier') mastersBonus = 0.4;   // 双非/QS100/USnews50硕士
    else if (schoolType === 'elite') mastersBonus = 0.6;       // 211/QS50/USnews30硕士
    else if (schoolType === 'superElite') mastersBonus = 0.8;       // 985/QS30/USnews20硕士

    // 最终学历系数 = 本科基础 + 硕士加成
    factor = bachelorBaseCoefficient + mastersBonus;
  } 
  // 博士学历
  else if (degreeType === 'phd') {
    if (schoolType === 'secondTier') factor = 2.0;       // 二本三本博士
    else if (schoolType === 'firstTier') factor = 2.4;   // 双非/QS100/USnews50博士
    else if (schoolType === 'elite') factor = 2.8;       // 211/QS50/USnews30博士
    else if (schoolType === 'superElite') factor = 3.0;       // 985/QS30/USnews20博士
  }
  
  return factor;
}; 