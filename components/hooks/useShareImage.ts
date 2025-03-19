import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { FormDataType } from '../constants/defaultFormData';
import { getValueAssessment } from '../modules/WorthCalculator';
import { getCityNameByFactor } from '../calculatorConfig';

const useShareImage = (value: number) => {
  const shareResultsRef = useRef<HTMLDivElement>(null);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // 获取颜色映射
  const getColorFromClassName = (className: string) => {
    switch(className) {
      case 'text-pink-800': return '#9d174d';
      case 'text-red-500': return '#ef4444';
      case 'text-orange-500': return '#f97316';
      case 'text-blue-500': return '#3b82f6';
      case 'text-green-500': return '#22c55e';
      case 'text-purple-500': return '#a855f7';
      case 'text-yellow-400': return '#facc15';
      default: return '#1f2937'; // text-gray-900
    }
  };

  const handleShareResults = async (formData: FormDataType, displaySalary: string) => {
    if (!shareResultsRef.current || isGeneratingImage) return;
    
    try {
      setIsGeneratingImage(true);
      
      // 创建分享卡片
      const shareCard = document.createElement('div');
      shareCard.className = 'fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center p-8';
      shareCard.style.position = 'fixed';
      shareCard.style.left = '-9999px';
      
      // 创建内容 - 恢复渐变背景
      const cardContent = document.createElement('div');
      cardContent.className = 'w-[600px] rounded-xl p-8 shadow-xl flex flex-col';
      cardContent.style.minHeight = '400px';
      // 使用渐变背景
      cardContent.style.background = 'linear-gradient(to bottom right, #EFF6FF, #EEF2FF)';
      
      // 强制使用浅色模式样式，避免在深色模式下渲染问题
      cardContent.style.color = '#1f2937'; // 文本颜色为深灰色
      
      // 获取评估
      const assessment = getValueAssessment(value, Boolean(formData.annualSalary));
      
      // 标题
      const title = document.createElement('div');
      title.className = 'text-2xl font-bold text-center mb-4';
      title.style.backgroundImage = 'linear-gradient(to right, #2563eb, #7c3aed)';
      title.style.backgroundClip = 'text';
      title.style.color = 'transparent';
      title.textContent = '我的工作性价比：' + assessment.text;
      
      // 主要内容
      const content = document.createElement('div');
      content.className = 'flex-1 flex flex-col justify-center py-2';
      
      // 信息区域
      const infoArea = document.createElement('div');
      infoArea.className = 'grid grid-cols-2 gap-6 mb-0'; // 减少了底部间距
      
      // 信息项目 - 使用与网页一致的颜色
      const createInfoItem = (label: string, value: string, isColoredValue: boolean = false, color: string = '') => {
        const item = document.createElement('div');
        item.className = 'rounded-lg bg-white p-4 shadow-sm';
        
        const labelEl = document.createElement('div');
        labelEl.className = 'text-sm text-gray-500 mb-1';
        labelEl.textContent = label;
        
        const valueEl = document.createElement('div');
        valueEl.className = 'text-xl font-semibold';
        
        // 应用与网页一致的颜色
        if (isColoredValue && color) {
          valueEl.style.color = getColorFromClassName(color);
        } else {
          valueEl.className += ' text-gray-900';
        }
        
        valueEl.textContent = value;
        
        item.appendChild(labelEl);
        item.appendChild(valueEl);
        return item;
      };
      
      // 添加信息项 - 工作性价比和结果评价使用对应颜色
      infoArea.appendChild(createInfoItem('工作性价比', value.toFixed(2), true, assessment.color));
      infoArea.appendChild(createInfoItem('结果评价', assessment.text, true, assessment.color));
      
      // 获取城市名称
      const cityName = getCityNameByFactor(formData.cityFactor);
      infoArea.appendChild(createInfoItem('工作城市', cityName));
      
      // 修改平均工时计算方式
      const workHours = Number(formData.workHours);
      const commuteHours = Number(formData.commuteHours);
      const restTime = Number(formData.restTime);
      
      // 计算实际工作付出时间：工时+通勤-1/2*摸鱼
      const effectiveWorkTime = workHours + commuteHours - 0.5 * restTime;
      
      infoArea.appendChild(createInfoItem('平均工时折算', effectiveWorkTime.toFixed(1) + ' h/天'));
      
      content.appendChild(infoArea);
      
      // 评分图标区 - 减少垂直间距
      const ratingArea = document.createElement('div');
      ratingArea.className = 'flex justify-center items-center py-2'; // 移除垂直内边距
      
      // 根据分数显示不同表情
      let emoji = '😭';
      if (value >= 0.6 && value < 1.0) emoji = '😔';
      else if (value >= 1.0 && value <= 1.8) emoji = '😐';
      else if (value > 1.8 && value <= 2.5) emoji = '😊';
      else if (value > 2.5 && value <= 3.2) emoji = '😁';
      else if (value > 3.2 && value <= 4.0) emoji = '🤩';
      else if (value > 4.0) emoji = '🎉';
      
      const emojiEl = document.createElement('div');
      emojiEl.className = 'text-6xl';
      emojiEl.textContent = emoji;
      ratingArea.appendChild(emojiEl);
      
      content.appendChild(ratingArea);
      
      // 版权信息 - 修改为两行显示
      const footer = document.createElement('div');
      footer.className = 'text-center text-sm text-gray-500 pt-2 flex flex-col gap-1';
      
      const line1 = document.createElement('div');
      line1.textContent = '由"这b班上得值不值·测算版"自动生成';
      
      const line2 = document.createElement('div');
      line2.textContent = 'jobworth.zippland.com';
      
      footer.appendChild(line1);
      footer.appendChild(line2);
      
      // 组装卡片
      cardContent.appendChild(title);
      cardContent.appendChild(content);
      cardContent.appendChild(footer);
      shareCard.appendChild(cardContent);
      document.body.appendChild(shareCard);
      
      // 截图前确保内容完全渲染
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // 获取实际高度并应用
      const actualHeight = cardContent.offsetHeight;
      
      // 截图
      const canvas = await html2canvas(cardContent, {
        backgroundColor: null, // 使用透明背景以保留渐变
        scale: 2, // 高清截图
        useCORS: true,
        allowTaint: true,
        logging: false,
        height: actualHeight
      });
      
      // 移除临时DOM
      document.body.removeChild(shareCard);
      
      // 转换为图片并下载
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = '工作性价比测算结果.png';
      link.click();
      
    } catch (error) {
      console.error('生成分享图片失败:', error);
      alert('生成分享图片失败，请稍后再试');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return {
    shareResultsRef,
    isGeneratingImage,
    handleShareResults
  };
};

export default useShareImage; 