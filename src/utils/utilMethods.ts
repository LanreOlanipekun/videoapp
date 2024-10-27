import moment from 'moment';

/**
 * Formats a number based on its magnitude.
 * If the number is greater than or equal to 1,000,000, it returns the number divided by 1,000,000 with one decimal place and 'M' appended.
 * If the number is greater than or equal to 1,000, it returns the number divided by 1,000 with one decimal place and 'k' appended.
 * If the number is less than 1,000, it returns the number as a string.
 *
 * @param number The number to be formatted.
 * @returns The formatted number as a string.
 */
export const formatNumber = (number: number) => {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1) + 'M'; // For millions
  } else if (number >= 1_000) {
    return (number / 1_000).toFixed(1) + 'k'; // For thousands
  }
  return number.toString(); // Less than a thousand
};

/**
 * Formats a given date string or Date object using the specified format.
 * If the input date is invalid or empty, an empty string is returned.
 * @param date - The date string or Date object to format.
 * @param format - The format to use for formatting the date. Defaults to 'YYYY-MM-DD'.
 * @returns The formatted date string based on the provided format.
 */
export const formatDate = (date: string | Date, format = 'YYYY-MM-DD') => {
  if (!date) return '';
  return moment(date).format(format);
};
