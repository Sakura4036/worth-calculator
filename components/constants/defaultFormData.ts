export interface FormDataType {
  annualSalary: string;
  pppFactor: string;
  country: string;
  workDaysPerWeek: string;
  wfhDaysPerWeek: string;
  annualLeave: string;
  paidSickLeave: string;
  publicHolidays: string;
  workHours: string;
  commuteHours: string;
  restTime: string;
  workEnvironment: string;
  leadership: string;
  teamwork: string;
  degreeType: string;
  schoolType: string;
  bachelorType: string;
  education: string;
  cityFactor: string;
  homeTown: string;
  shuttle: string;
  canteen: string;
  workYears: string;
  jobStability: string;
}

export const DEFAULT_FORM_DATA: FormDataType = {
  annualSalary: '',         // 年薪
  pppFactor: '4.19',        // 购买力平价转换因子，默认为中国大陆
  country: 'china',         // 国家/地区，默认为中国
  workDaysPerWeek: '5',     // 每周工作天数
  wfhDaysPerWeek: '0',      // 每周居家办公天数
  annualLeave: '5',         // 年假天数
  paidSickLeave: '3',      // 带薪病假天数
  publicHolidays: '13',     // 法定节假日
  workHours: '10',          // 工作时长
  commuteHours: '2',        // 通勤时长
  restTime: '1',            // 休息时间（午休+摸鱼）
  workEnvironment: '1.0',   // 工作环境系数
  leadership: '1.0',        // 领导/老板系数
  teamwork: '1.0',          // 同事环境系数
  degreeType: 'bachelor',   // 学位类型，改为本科
  schoolType: 'elite',      // 学校类型
  bachelorType: 'elite',    // 新增：本科背景类型
  education: '1.2',         // 学历系数，修改为对应本科985/211的系数
  cityFactor: '1.0',        // 城市系数，默认为三线城市
  homeTown: 'no',           // 新增：是否在家乡工作，默认不在
  shuttle: '1.0',           // 班车系数
  canteen: '1.0',           // 食堂系数
  workYears: '0',           // 新增：工作年限
  jobStability: 'private'   // 新增：工作稳定度/类型
}; 