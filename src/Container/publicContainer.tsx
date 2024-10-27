import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Text from '../components/Text';
import Toggle from '../components/Toggle';

const PublicContainer = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme preference from local storage if available
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Apply the dark class based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = (val: boolean) => setDarkMode(val);
  return (
    <div>
      <header className="bg-white dark:bg-gray-500 font-Euclid border-b border-b-gray_100">
        <nav
          className="mx-auto flex-col lg:flex-row flex max-w-7xl lg:items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="lg:flex flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Text
                text="Video App"
                size={20}
                color="text-primary_blue_600 dark:text-base_White"
              />
            </a>
          </div>
          <div className="flex flex-1 justify-end w-[100%]">
            <Toggle
              label={darkMode ? 'Dark' : 'Light'}
              handleOnChange={toggleDarkMode}
              checked={darkMode ? true : false}
            />
          </div>
        </nav>
      </header>
      <div className="px-6 py-7 md:px-20 bg-base_White dark:bg-gray-500 min-h-[100dvh]">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicContainer;
