import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import { Icon } from '../Icons';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  id: string;
  name: string;
}
const SearchInput: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative w-[100%]">
      {label && (
        <label
          className="text-sm leading-[20px] text-gray_700 font-medium"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="absolute bottom-[10px] left-[10px]">
        <Icon name="search" />
      </div>
      <input
        className="h-40 mt-1 shadow-xs bg-white rounded-full pl-9 px-2.5 border border-gray_200 focus:outline-0 focus:ring-0 focus:border focus:border-primary_Blue_300 focus:shadow-inputFocus text-gray_500 placeholder:font-normal placeholder:text-gray_500 w-[100%]"
        id={id}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder ?? 'Input text..'}
      />
    </div>
  );
};

export default SearchInput;
