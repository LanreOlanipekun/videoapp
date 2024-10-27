import { WretchError } from 'wretch';

/**
 * Retrieves and processes the error details from a WretchError object.
 * @param error - The WretchError object to extract error details from.
 * @returns An object containing the error code and message.
 */
export function getError(error: WretchError) {
  try {
    if (!error) return { message: '' };
    const { code, message } = JSON.parse(error.message);
    if (code === 'NOT_FOUND') return { code: code, message: 'Not found' };
    return { code, message };
  } catch (exception: unknown) {
    const err = exception as Error;
    return {
      code: 'INTERNAL',
      message: error.response.statusText || err.message,
    };
  }
}
