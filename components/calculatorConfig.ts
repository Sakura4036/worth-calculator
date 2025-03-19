import { FormDataType } from './constants/defaultFormData';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioConfig {
  label: string;
  name: keyof FormDataType;
  options: RadioOption[];
}

// 工作类型选项配置
export const jobStabilityConfig: RadioConfig = {
  label: "合同类型",
  name: "jobStability",
  options: [
    { label: '私企续签', value: 'private' },
    { label: '外企续签', value: 'foreign' },
    { label: '长期雇佣', value: 'state' },
    { label: '永久编制', value: 'government' },
  ]
};

// 工作环境选项配置
export const workEnvironmentConfig: RadioConfig = {
  label: "工作环境",
  name: "workEnvironment",
  options: [
    { label: '偏僻的工厂/工地/户外', value: '0.8' },
    { label: '工厂/工地/户外', value: '0.9' },
    { label: '普通环境', value: '1.0' },
    { label: 'CBD', value: '1.1' },
  ]
};

// 城市选项配置
export const cityFactorConfig: RadioConfig = {
  label: "所在城市（按生活成本选择）",
  name: "cityFactor",
  options: [
    { label: '一线城市', value: '0.60' },
    { label: '新一线', value: '0.7' },
    { label: '二线城市', value: '0.9' },
    { label: '三线城市', value: '1.1' },
    { label: '四线城市', value: '1.3' },
    { label: '县城', value: '1.7' },
    { label: '乡镇', value: '2.2' },
  ]
};

// 是否在家乡工作配置
export const homeTownConfig: RadioConfig = {
  label: "是否在家乡工作",
  name: "homeTown",
  options: [
    { label: '不在家乡', value: 'no' },
    { label: '在家乡', value: 'yes' },
  ]
};

// 领导/老板配置
export const leadershipConfig: RadioConfig = {
  label: "领导/老板",
  name: "leadership",
  options: [
    { label: '对我不爽', value: '0.7' },
    { label: '管理严格', value: '0.9' },
    { label: '中规中矩', value: '1.0' },
    { label: '善解人意', value: '1.1' },
    { label: '我是嫡系', value: '1.3' },
  ]
};

// 同事环境配置
export const teamworkConfig: RadioConfig = {
  label: "同事环境",
  name: "teamwork",
  options: [
    { label: '都是傻逼', value: '0.9' },
    { label: '萍水相逢', value: '1.0' },
    { label: '和和睦睦', value: '1.1' },
    { label: '私交甚好', value: '1.2' },
  ]
};

// 班车服务配置
export const shuttleConfig: RadioConfig = {
  label: "班车服务（加分项）",
  name: "shuttle",
  options: [
    { label: '无班车', value: '1.0' },
    { label: '班车不便', value: '0.95' },
    { label: '便利班车', value: '0.9' },
    { label: '班车直达', value: '0.85' },
  ]
};

// 食堂情况配置
export const canteenConfig: RadioConfig = {
  label: "食堂情况（加分项）",
  name: "canteen",
  options: [
    { label: '无食堂/很难吃', value: '1.0' },
    { label: '食堂一般', value: '1.05' },
    { label: '食堂不错', value: '1.1' },
    { label: '食堂超赞', value: '1.15' },
  ]
};

// 城市名称映射
export const getCityNameByFactor = (cityFactor: string): string => {
  switch (cityFactor) {
    case '0.60': return "一线城市";
    case '0.75': return "新一线城市";
    case '0.9': return "二线城市";
    case '1.1': return "三线城市";
    case '1.3': return "四线城市";
    case '1.7': return "县城";
    case '2.2': return "乡镇";
    default: return "三线城市";
  }
}; 