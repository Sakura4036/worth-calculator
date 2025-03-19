import React from 'react';
import { Wallet } from 'lucide-react';
import { FormDataType } from '../constants/defaultFormData';

interface SalaryFormProps {
  formData: FormDataType;
  handleInputChange: (name: keyof FormDataType, value: string) => void;
}

const SalaryForm: React.FC<SalaryFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {formData.country === 'china' ? '年薪总包（元）' : '年薪总包（当地货币）'}
        </label>
        <div className="flex items-center gap-2 mt-1">
          <Wallet className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            type="number"
            value={formData.annualSalary}
            onChange={(e) => handleInputChange('annualSalary', e.target.value)}
            placeholder={formData.country === 'china' ? "税前年薪" : "使用当地货币"}
            className="block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div className="flex items-center mt-2">
          <input
            id="non-china"
            type="checkbox"
            checked={formData.country !== 'china'}
            onChange={(e) => handleInputChange('country', e.target.checked ? 'other' : 'china')}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="non-china" className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            非中国地区薪资
          </label>
        </div>
      </div>

      {formData.country === 'other' && (
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            购买力平价(PPP)转换因子
            <span className="ml-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 cursor-pointer group relative">
              ?
              <span className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
                PPP转换因子是将各国货币购买力标准化的指标。例如中国为4.19，表示1美元在美国的购买力等同于4.19元人民币在中国的购买力。
              </span>
            </span>
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.pppFactor}
            onChange={(e) => handleInputChange('pppFactor', e.target.value)}
            placeholder="请输入购买力平价转换因子"
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            常见地区：中国大陆:4.19, 日本:102.59, 美国:1.00, 新加坡:0.84
            <a 
              href="https://zh.wikipedia.org/wiki/%E8%B4%AD%E4%B9%B0%E5%8A%9B%E5%B9%B3%E4%BB%B7%E8%BD%AC%E6%8D%A2%E5%9B%A0%E5%AD%90" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-500 hover:underline"
            >
              查看更多
            </a>
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">每周工作天数/d</label>
          <input
            type="number"
            value={formData.workDaysPerWeek}
            onChange={(e) => handleInputChange('workDaysPerWeek', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            周wfh天数/d
            <span className="ml-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 cursor-pointer group relative">
              ?
              <span className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
                WFH指居家办公(Work From Home)，这里填写的是前面工作天数中有多少天是在家办公的。
              </span>
            </span>
          </label>
          <input
            type="number"
            min="0"
            max={Number(formData.workDaysPerWeek)}
            step="1"
            value={formData.wfhDaysPerWeek}
            onChange={(e) => handleInputChange('wfhDaysPerWeek', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">年假天数/d</label>
          <input
            type="number"
            value={formData.annualLeave}
            onChange={(e) => handleInputChange('annualLeave', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">法定假日/d</label>
          <input
            type="number"
            value={formData.publicHolidays}
            onChange={(e) => handleInputChange('publicHolidays', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">带薪病假/d</label>
          <input
            type="number"
            value={formData.paidSickLeave}
            onChange={(e) => handleInputChange('paidSickLeave', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            工时/h
            <span className="ml-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 cursor-pointer group relative">
              ?
              <span className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
                工时：是指&quot;下班时间-上班时间&quot;的总时间，包括吃饭、午休、加班等（不含通勤）。
              </span>
            </span>
          </label>
          <input
            type="number"
            value={formData.workHours}
            onChange={(e) => handleInputChange('workHours', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            通勤/h
            <span className="ml-1 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 cursor-pointer group relative">
              ?
              <span className="absolute z-10 invisible group-hover:visible bg-gray-900 text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 w-48 sm:w-64">
                通勤时长是指上下班往返的总时间，即家到公司和公司回家的时间总和。
              </span>
            </span>
          </label>
          <input
            type="number"
            value={formData.commuteHours}
            onChange={(e) => handleInputChange('commuteHours', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">午休&摸鱼/h</label>
          <input
            type="number"
            value={formData.restTime}
            onChange={(e) => handleInputChange('restTime', e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SalaryForm; 