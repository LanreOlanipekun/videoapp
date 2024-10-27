export interface INetworkResponse<T = unknown> {
  status: string;
  message: string;
  data: T;
}
