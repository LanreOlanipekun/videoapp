export interface IVideoCommentsQuery {
  [key: string]: string | number;
  pageToken: string;
}

export interface IVideoDetails {
  title: string;
  description: string;
  image: string;
  viewCount: string;
  likeCount: string;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface IVideoComments {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: IPageInfo;
  items: Array<{
    kind: string;
    etag: string;
    id: string;
    snippet: {
      channelId: string;
      videoId: string;
      topLevelComment: {
        kind: string;
        etag: string;
        id: string;
        snippet: {
          channelId: string;
          videoId: string;
          textDisplay: string;
          textOriginal: string;
          authorDisplayName: string;
          authorProfileImageUrl: string;
          authorChannelUrl: string;
          authorChannelId: {
            value: string;
          };
          canRate: boolean;
          viewerRating: string;
          likeCount: number;
          publishedAt: string;
          updatedAt: string;
        };
      };
      canReply: boolean;
      totalReplyCount: number;
      isPublic: boolean;
    };
  }>;
}
