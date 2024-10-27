import wretch from 'wretch';

type ParamsType = Record<string, string | number>;

export const get = async <T>(
  endpoint: string,
  params: ParamsType = {},
): Promise<T> => {
  const urlWithParams = Object.keys(params)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`,
    )
    .join('&');
  return wretch(`${endpoint}?${urlWithParams}`).get().json();
};

export const post = async <T>(endpoint: string, body: object): Promise<T> => {
  return wretch(`${endpoint}`).post(body).json();
};

export const del = async <T>(endpoint: string): Promise<T> => {
  return wretch(`${endpoint}`).delete().res();
};

export const update = async <T>(endpoint: string, body: object): Promise<T> => {
  return wretch(`${endpoint}`).put(body).json();
};

export const patch = async <T>(endpoint: string, body: object): Promise<T> => {
  return wretch(`${endpoint}`).patch(body).json();
};
