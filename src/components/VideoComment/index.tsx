import { FC, SyntheticEvent } from 'react';

import DefaultAvatar from '../../assets/icons/avatar.png';
import useVideoDescription from '../../hooks/useVideoDescription';
import { IVideoComments } from '../../interface/video';
import { formatDate } from '../../utils/utilMethods';
import Button from '../Button';
import Card from '../Card';
import { VideoCommentLoader } from '../Loaders';
import PageTitle from '../PageTitle';
import Text from '../Text';

interface IProps {
  loading: boolean;
  comments?: IVideoComments['items'];
  loadNext: () => void;
  loadPrev: () => void;
  showNext: boolean;
  showPrev: boolean;
}

const VideoComments: FC<IProps> = ({
  loading,
  comments,
  loadNext,
  loadPrev,
  showNext,
  showPrev,
}) => {
  const { formatText } = useVideoDescription();
  if (loading && !loadPrev) {
    return <VideoCommentLoader />;
  }
  if (!comments || !comments.length) return null;

  const addDefaultImg = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = ev.target as HTMLImageElement;
    target.src = DefaultAvatar;
  };
  return (
    <Card classNames="gap-9  min-h-[fit-content] overflow-y-auto dark:bg-gray_50">
      <PageTitle title="Comments" />
      {comments.map((comment) => (
        <div className="gap-4 flex flex-col flex-wrap" key={comment.id}>
          <div className="flex flex-row items-center flex-wrap w-[100%] gap-3">
            <div className="h-9 w-9 rounded-[100%] overflow-hidden">
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                onError={addDefaultImg}
                alt="..."
              />
            </div>

            <Text
              text={comment.snippet.topLevelComment.snippet.authorDisplayName}
              color="text-primary_blue_600"
            />
            <Text
              text={formatDate(
                comment.snippet.topLevelComment.snippet.publishedAt,
                'MMMM DD, YYYY h:mm a',
              )}
              color="text-gray_400"
            />
          </div>

          <div className="flex flex-row flex-wrap flex-1 w-[100%] break-all">
            {formatText(comment.snippet.topLevelComment.snippet.textOriginal)}
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Text
              size={14}
              classNames="text-primary_blue_600 font-bold"
              text={`${comment.snippet.totalReplyCount} ${comment.snippet.totalReplyCount > 1 ? 'Replies' : 'Reply'}`}
            />
            <Text
              classNames="text-primary_blue_600 font-bold"
              text={`${comment.snippet.topLevelComment.snippet.likeCount} ${comment.snippet.topLevelComment.snippet.likeCount > 1 ? 'Likes' : 'Like'}`}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-row justify-center gap-7">
        <Button
          label="previous"
          variant="default"
          disabled={!showPrev}
          onClick={loadPrev}
        />

        <Button
          label="Next"
          variant="primary"
          disabled={!showNext}
          onClick={loadNext}
        />
      </div>
    </Card>
  );
};

export default VideoComments;
