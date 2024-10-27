import { CSSProperties, FC, ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  style?: CSSProperties;
  classNames?: string;
}
const Card: FC<ICardProps> = ({
  children,
  paddingX = '40px',
  paddingY = '28px',
  style = {},
  classNames,
}) => {
  return (
    <div
      className={`flex flex-col w-full rounded-xl overflow-hidden flex-wrap border border-gray_200 bg-base_White ${classNames}`}
      style={{ padding: `${paddingY} ${paddingX}`, ...style }}
    >
      {children}
    </div>
  );
};

export default Card;
