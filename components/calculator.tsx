"use client";

import React from 'react';
import useScrollPosition from './hooks/useScrollPosition';
import useRedirect from './hooks/useRedirect';
import useFormData from './hooks/useFormData';
import useShareImage from './hooks/useShareImage';
import useEducationEffect from './hooks/useEducationEffect';
import { calculateWorth } from './modules/WorthCalculator';
import HeaderSection from './sections/HeaderSection';
import SalaryForm from './sections/SalaryForm';
import EnvironmentForm from './sections/EnvironmentForm';
import EducationForm from './sections/EducationForm';
import ResultSection from './sections/ResultSection';

const SalaryCalculator = () => {
  // 使用各种Hooks
  useScrollPosition();
  useRedirect();
  const { formData, handleInputChange, updateEducationFactor } = useFormData();
  
  // 计算工作性价比
  const value = calculateWorth(formData);
  
  // 使用教育系数计算的Effect
  useEducationEffect(formData, updateEducationFactor);
  
  // 分享图片生成
  const { shareResultsRef, isGeneratingImage, handleShareResults } = useShareImage(value);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 text-gray-900 dark:text-white">
      {/* 头部区域 */}
      <HeaderSection />
      
      {/* 表单区域 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30">
        <div className="p-6 space-y-8">
          {/* 薪资与工作时间 section */}
          <SalaryForm formData={formData} handleInputChange={handleInputChange} />

          <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

          {/* 环境系数 */}
          <EnvironmentForm formData={formData} handleInputChange={handleInputChange} />
          
          {/* 学历和工作年限 */}
          <EducationForm formData={formData} handleInputChange={handleInputChange} />
        </div>
      </div>

      {/* 结果卡片 */}
      <ResultSection 
        formData={formData}
        value={value}
        shareResultsRef={shareResultsRef}
        isGeneratingImage={isGeneratingImage}
        handleShareResults={handleShareResults}
      />
    </div>
  );
};

export default SalaryCalculator;