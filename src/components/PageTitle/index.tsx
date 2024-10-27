import { FC } from 'react';

import Text from '../Text';

interface IPageTitle {
  title: string;
  description?: string;
}
const PageTitle: FC<IPageTitle> = ({ title, description }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4  justify-between items-center border-b border-gray_200 pb-5">
      <div className="flex flex-col gap-1">
        <Text
          text={title}
          size={30}
          color="text-gray_900 dark:text-base_White"
          classNames="font-medium"
        />
        {description && (
          <Text
            text={description}
            size={16}
            color="text-gray_500 dark:text-base_White"
          />
        )}
      </div>
    </div>
  );
};

export default PageTitle;
