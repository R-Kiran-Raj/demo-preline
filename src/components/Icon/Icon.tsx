import React from 'react';
import Image from 'next/image';
import IconSvg from '@/public/svg/user.svg';

const Icon = () => {
  return (
    <div className="flex items-center">
      <Image src={IconSvg} alt="Icon" className="w-12 h-12" />
    </div>
  );
};

export default Icon;
