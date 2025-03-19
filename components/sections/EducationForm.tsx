import React from 'react';
import { FormDataType } from '../constants/defaultFormData';

interface EducationFormProps {
  formData: FormDataType;
  handleInputChange: (name: keyof FormDataType, value: string) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">个人学历水平</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">学位类型</label>
            <select
              value={formData.degreeType}
              onChange={(e) => handleInputChange('degreeType', e.target.value)}
              className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              <option value="belowBachelor">专科及以下</option>
              <option value="bachelor">本科</option>
              <option value="masters">硕士</option>
              <option value="phd">博士</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">学校类型</label>
            <select
              value={formData.schoolType}
              onChange={(e) => handleInputChange('schoolType', e.target.value)}
              className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
              disabled={formData.degreeType === 'belowBachelor'}
            >
              <option value="secondTier">二本三本</option>
              {formData.degreeType === 'bachelor' ? (
                <>
                  <option value="firstTier">双非/ QS200/ USnews80</option>
                  <option value="elite">211/ QS100/ USnews50</option>
                  <option value="superElite">985/ QS50/ USnews20</option>
                </>
              ) : (
                <>
                  <option value="firstTier">双非/ QS100/ USnews50</option>
                  <option value="elite">211/ QS50/ USnews30</option>
                  <option value="superElite">985/ QS30/ USnews20</option>
                </>
              )}
            </select>
          </div>
        </div>
        
        {/* 硕士显示本科背景选项 */}
        {formData.degreeType === 'masters' && (
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">本科背景</label>
            <select
              value={formData.bachelorType}
              onChange={(e) => handleInputChange('bachelorType', e.target.value)}
              className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
            >
              <option value="secondTier">二本三本</option>
              <option value="firstTier">双非/ QS200/ USnews80</option>
              <option value="elite">211/ QS100/ USnews50</option>
              <option value="superElite">985/ QS50/ USnews20</option>
            </select>
          </div>
        )}
      </div>

      {/* 工作年限选择 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">工作年限</label>
        <select
          value={formData.workYears}
          onChange={(e) => handleInputChange('workYears', e.target.value)}
          className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
        >
          <option value="0">应届生</option>
          <option value="1">1-3年</option>
          <option value="2">3-5年</option>
          <option value="4">5-8年</option>
          <option value="6">8-10年</option>
          <option value="10">10-12年</option>
          <option value="15">12年以上</option>
        </select>
      </div>
    </div>
  );
};

export default EducationForm; 