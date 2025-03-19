import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  options: RadioOption[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, value, onChange, options }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
    <div className="grid grid-cols-4 gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-3 py-2 rounded-md text-sm transition-colors
            ${value === option.value 
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 font-medium' 
              : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'}`}
          onClick={(e) => {
            e.preventDefault(); // 阻止默认行为
            e.stopPropagation(); // 阻止事件冒泡
            onChange(name, option.value);
          }}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  </div>
);

export default RadioGroup; 