import React from 'react';
import { FormDataType } from '../constants/defaultFormData';
import RadioGroup from '../ui/RadioGroup';
import { 
  jobStabilityConfig, 
  workEnvironmentConfig, 
  cityFactorConfig, 
  homeTownConfig, 
  leadershipConfig, 
  teamworkConfig, 
  shuttleConfig, 
  canteenConfig 
} from '../calculatorConfig';

interface EnvironmentFormProps {
  formData: FormDataType;
  handleInputChange: (name: keyof FormDataType, value: string) => void;
}

const EnvironmentForm: React.FC<EnvironmentFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <RadioGroup
        label={jobStabilityConfig.label}
        name={jobStabilityConfig.name}
        value={formData[jobStabilityConfig.name]}
        onChange={handleInputChange}
        options={jobStabilityConfig.options}
      />
      
      <RadioGroup
        label={workEnvironmentConfig.label}
        name={workEnvironmentConfig.name}
        value={formData[workEnvironmentConfig.name]}
        onChange={handleInputChange}
        options={workEnvironmentConfig.options}
      />

      <RadioGroup
        label={cityFactorConfig.label}
        name={cityFactorConfig.name}
        value={formData[cityFactorConfig.name]}
        onChange={handleInputChange}
        options={cityFactorConfig.options}
      />

      <RadioGroup
        label={homeTownConfig.label}
        name={homeTownConfig.name}
        value={formData[homeTownConfig.name]}
        onChange={handleInputChange}
        options={homeTownConfig.options}
      />

      <RadioGroup
        label={leadershipConfig.label}
        name={leadershipConfig.name}
        value={formData[leadershipConfig.name]}
        onChange={handleInputChange}
        options={leadershipConfig.options}
      />

      <RadioGroup
        label={teamworkConfig.label}
        name={teamworkConfig.name}
        value={formData[teamworkConfig.name]}
        onChange={handleInputChange}
        options={teamworkConfig.options}
      />

      <RadioGroup
        label={shuttleConfig.label}
        name={shuttleConfig.name}
        value={formData[shuttleConfig.name]}
        onChange={handleInputChange}
        options={shuttleConfig.options}
      />

      <RadioGroup
        label={canteenConfig.label}
        name={canteenConfig.name}
        value={formData[canteenConfig.name]}
        onChange={handleInputChange}
        options={canteenConfig.options}
      />
    </div>
  );
};

export default EnvironmentForm; 