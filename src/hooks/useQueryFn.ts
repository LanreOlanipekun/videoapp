import type { UseQueryResult } from '@tanstack/react-query';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { INetworkResponse } from '../interface/network';
import {
  IVideoComments,
  IVideoCommentsQuery,
  IVideoDetails,
} from '../interface/video';
import { getVideo, getVideoComments } from '../network/api';

export const useVideo = (
  id: string,
): UseQueryResult<INetworkResponse<IVideoDetails>, Error> => {
  return useQuery({
    queryFn: () => getVideo(id),
    queryKey: ['video', id],
    enabled: Boolean(id),
    retry: false,
    placeholderData: keepPreviousData,
  });
};

export const useVideoComment = (
  id: string,
  query?: IVideoCommentsQuery,
): UseQueryResult<INetworkResponse<IVideoComments>, unknown> => {
  return useQuery({
    queryFn: () => getVideoComments(id, query),
    queryKey: ['videoComments', id, query?.pageToken || ''],
    enabled: Boolean(id),
    placeholderData: keepPreviousData,
    retry: false,
  });
};
