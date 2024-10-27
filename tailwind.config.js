// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements-react/dist/js/**/*.js',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Euclid: ['Euclid-circular-a', 'sans-serif'],
      },
      colors: {
        // gray
        gray_50: '#F6F7F9',
        gray_100: '#F2F4F7',
        gray_200: '#D5DBE2',
        gray_300: '#B0BBC9',
        gray_400: '#8696AA',
        gray_500: '#677990',
        gray_600: '#526277',
        gray_700: '#475467',
        gray_800: '#3A4452',
        gray_900: '#343B46',
        gray_950: '#22272F',

        base_White: '#FFFFFF',

        // Primary
        primary_blue_950: '#0E295D',
        primary_blue_900: '#0D439B',
        primary_blue_800: '#084BC5',
        primary_blue_700: '#0061FE',
        primary_blue_600: '#003399',
        primary_blue_500: '#1E96FF',
        primary_blue_400: '#48B9FF',
        primary_blue_300: '#83D3FF',
        primary_blue_200: '#B5E3FF',
        primary_blue_100: '#D6EEFF',
        primary_blue_50: '#EDF8FF',

        // Secondary
        secondary: '#081B2B',

        // success
        success_50: '#EDFFF8',
        success_100: '#D5FFF0',
        success_200: '#AEFFE2',
        success_300: '#70FFCD',
        success_400: '#2BFDB1',
        success_500: '#00E693',
        success_600: '#00C076',
        success_700: '#009660',
        success_800: '#06754E',
        success_900: '#076042',
        success_950: '#003724',

        // error
        error_50: '#FFF3F1',
        error_100: '#FFE4DF',
        error_200: '#FFCEC5',
        error_300: '#FFAC9D',
        error_400: '#FF7C64',
        error_500: '#FF5434',
        error_600: '#ED3715',
        error_700: '#C82A0D',
        error_800: '#A5270F',
        error_900: '#882614',
        error_950: '#4B0F04',

        // warning
        warning_50: '#FFFBEB',
        warning_100: '#FFF4C6',
        warning_200: '#FFE788',
        warning_300: '#FFD54A',
        warning_400: '#FFC121',
        warning_500: '#F99F07',
        warning_600: '#DD7702',
        warning_700: '#B75306',
        warning_800: '#943F0C',
        warning_900: '#7A340D',
        warning_950: '#461A02',
      },
      borderColor: (theme) => ({
        gray_100: theme('colors.gray_100'),
      }),
      spacing: {
        18: '1.125rem',
        10: '0.625rem',
        40: '2.5rem',
        14: '0.875rem',
        8: '0.5rem',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
        md: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',

        inputFocus:
          '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #E6EFFF',
        grayButtonFocus:
          '0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
      },
      fontSize: {
        '7xl': '4.5rem', //72px
        '6xl': '3.75rem', //60px
        '5xl': '3rem', //48px
        '4xl': '2.25rem', //36px
        '3xl': '1.875rem', //30px
        '2xl': '1.5rem', //24px
        xl: '1.25rem', // 20px
        lg: '1.125rem', //18px
        md: '1rem', // 16px
        sm: '0.875rem', //14px
        xs: '0.75rem', //12px
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements-react/dist/plugin.cjs'),
  ],
};
