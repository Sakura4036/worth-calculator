import React from 'react';
import { FormDataType } from '../constants/defaultFormData';
import { getValueAssessment } from '../modules/WorthCalculator';
import { getDisplaySalary } from '../modules/SalaryCalculator';

interface ResultSectionProps {
  formData: FormDataType;
  value: number;
  shareResultsRef: React.RefObject<HTMLDivElement>;
  isGeneratingImage: boolean;
  handleShareResults: (formData: FormDataType, displaySalary: string) => void;
}

const ResultSection: React.FC<ResultSectionProps> = ({
  formData,
  value,
  shareResultsRef,
  isGeneratingImage,
  handleShareResults
}) => {
  const assessment = getValueAssessment(value, Boolean(formData.annualSalary));
  const displaySalary = getDisplaySalary(formData);

  return (
    <div ref={shareResultsRef} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 p-6">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          工作性价比：{value.toFixed(2)}
        </h2>
        <p className={`text-xl font-semibold ${assessment.color}`}>
          {assessment.text}
        </p>
        <button
          onClick={() => handleShareResults(formData, displaySalary)}
          disabled={isGeneratingImage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          {isGeneratingImage ? '生成中...' : '分享结果'}
        </button>
      </div>
    </div>
  );
};

export default ResultSection; 