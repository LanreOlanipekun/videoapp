import { CSSProperties, FC } from 'react';

import { Icon, IconProps } from '../Icons';
import Text from '../Text';

interface IProps {
  label: string;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'primary'
    | 'primary_lg'
    | 'secondary'
    | 'tertiary'
    | 'link';
  size?: 'normal' | 'large';
  classNames?: string;
  onClick?: () => void;
  loading?: boolean;
  loadingText?: string;
  icon?: IconProps['name'];
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}
const Button: FC<IProps> = ({
  label,
  disabled = false,
  variant = 'default',
  classNames,
  onClick,
  loading,
  loadingText,
  icon,
  iconPosition = 'left',
  iconColor,
  style,
  type = 'button',
}) => {
  const buttonVariants = {
    default: 'button-flex-container',
    primary: 'button-primary-flex-container',
    primary_lg: 'button-primary-lg-flex-container',
    secondary: 'button-secondary-flex-container',
    tertiary: 'button-tertiary-flex-container',
    link: 'button-link-flex-container ',
  };
  function getVariant() {
    if (buttonVariants[variant]) {
      return buttonVariants[variant];
    }
    return buttonVariants['default'];
  }
  return (
    <button
      disabled={disabled || loading}
      className={`${getVariant()} ${classNames ?? ''}`}
      onClick={onClick ? onClick : () => null}
      style={style ? { ...style } : {}}
      type={type}
    >
      {!loading ? (
        <div className="flex gap-[12px] items-center">
          {icon && iconPosition === 'left' && (
            <Icon name={icon} color={iconColor} />
          )}
          <>{label}</>
          {icon && iconPosition === 'right' && (
            <Icon name={icon} color={iconColor} />
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex gap-[12px]">
            <Text
              text={loadingText ? `${loadingText}...` : `${label}`}
              size={16}
              color="text-base_white"
              classNames="font-medium"
            />
            <div className="animate-spin">
              <Icon name="loading" />
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default Button;
