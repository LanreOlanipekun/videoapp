import { INetworkResponse } from '../interface/network';
import {
  IVideoComments,
  IVideoCommentsQuery,
  IVideoDetails,
} from '../interface/video';
import endpoints from './endpoints';
import { get } from './request';

const getVideo = (id: string) =>
  get<INetworkResponse<IVideoDetails>>(endpoints.getVideo(id));

const getVideoComments = (id: string, query?: IVideoCommentsQuery) =>
  get<INetworkResponse<IVideoComments[]>>(
    endpoints.getComments(id),
    query?.pageToken ? query : undefined,
  );

export { getVideo, getVideoComments };
