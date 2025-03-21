import React from 'react';
import { Github } from 'lucide-react';
import Image from 'next/image';

const HeaderSection: React.FC = () => {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        这b班上得值不值·测算版
        {/* <span className="ml-2 text-xs align-top text-gray-500 dark:text-gray-400">v3.5.1</span> */}
      </h1>

      {/* GitHub 链接和访问量计数 */}
      <div className="flex flex-col items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        {/* 第一排: GitHub、Email、小红书 */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/Sakura4036/worth-calculator.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">Star on</span>
            <span>GitHub</span>
          </a>

          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
          <a
            href="https://www.xiaohongshu.com/user/profile/623e8b080000000010007721?xsec_token=YBdeHZTp_aVwi1Ijmras5CgTN9fhmJ9fwVRviTyiF_EAs%3D&xsec_source=app_share&xhsshare=CopyLink&appuid=623e8b080000000010007721&apptime=1742023486&share_id=48e7c11a2abe404494693a24218213ae&share_channel=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z" />
              <path d="M17 8.4c0-1.697-1.979-2.709-3.489-1.684-1.628-1.028-3.639.045-3.511 1.68-1.579-.104-2.702 1.74-1.614 3.079-1.191.974-.401 3.062 1.394 3.062.966 1.269 2.902.941 3.614-.335 1.53.503 3.204-.812 2.604-2.802 1.468-.572.905-2.749-.998-3.001z" />
            </svg>
            <span>小红书</span>
          </a>
        </div>

        {/* 第二排: "持续更新中..."和欢迎建议文字 */}
        <div className="flex items-center gap-2">
          <span className="text-blue-500 dark:text-blue-400 font-medium">
            <span className="animate-pulse">✨</span>
            持续更新中，期待您的宝贵建议
            <span className="animate-pulse">✨</span>
          </span>
        </div>

        {/* 第三排: 访问量 */}
        <a
          href="https://hits.seeyoufarm.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <Image
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FYourUsername%2Fworth-calculator&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=true"
            alt="访问量"
            width={100}
            height={20}
            className="h-5 w-auto"
            unoptimized
          />
        </a>
      </div>
    </div>
  );
};

export default HeaderSection; 