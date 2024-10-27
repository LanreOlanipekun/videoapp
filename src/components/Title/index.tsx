import React, { FC } from 'react';

import { Icon, IconProps } from '../Icons';
import Text from '../Text';

interface IProps {
  icon?: IconProps['name'];
  title: string;
  description?: string;
}
const Title: FC<IProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {icon && <Icon name={icon} />}
      <Text
        text={title}
        size={30}
        color="text-gray_900"
        classNames="font-medium"
      />
      {description && (
        <Text
          text={description}
          size={16}
          color="text-gray_500"
          classNames="-mt-[20px] text-center"
        />
      )}
    </div>
  );
};

export default Title;
