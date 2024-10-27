import { ChangeEvent, FC, useEffect, useState } from 'react';

const Toggle: FC<{
  label: string;
  checked?: boolean;
  handleOnChange?: (checked: boolean) => void;
}> = ({ label, checked, handleOnChange }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (checked !== undefined) {
      setValue(checked);
    }
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
    if (handleOnChange) handleOnChange(e.target.checked);
  };

  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={value}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#ECEFF2] peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray_800 after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary_Blue_600" />
        <span className="ms-3 text-sm text-gray_700 dark:text-base_White">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
