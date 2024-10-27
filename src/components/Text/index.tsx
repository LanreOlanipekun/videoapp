import React, { FC } from 'react';

interface TextProps {
  size?: 72 | 60 | 48 | 36 | 30 | 24 | 20 | 18 | 16 | 14 | 12;
  text: string;
  color?: string;
  classNames?: string;
}
const Text: FC<TextProps> = ({
  size = 16,
  text,
  color = 'text-gray_950',
  classNames,
}) => {
  const fontSizes = {
    '72': 'text-7xl leading-[90px] tracking-[-1.44px]',
    '60': 'text-6xl leading-[72px] tracking-[-1.2px]',
    '48': 'text-5xl leading-[60px] tracking-[-0.96px]',
    '36': 'text-4xl leading-[44px] tracking-[-0.72px]',
    '30': 'text-3xl leading-[38px]',
    '24': 'text-2xl leading-[32px]',
    '20': 'text-xl leading-[30px]',
    '18': 'text-lg leading-[28px]',
    '16': 'text-md leading-[24px]',
    '14': 'text-sm leading-[20px]',
    '12': 'text-xs leading-[18px]',
  };
  function getSize() {
    if (fontSizes[size]) {
      return fontSizes[size];
    }
    return fontSizes[16];
  }

  return (
    <p className={`font-Euclid  ${getSize()} ${color} ${classNames ?? ''}`}>
      {text}
    </p>
  );
};
export default Text;
