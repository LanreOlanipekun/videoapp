import { FC } from 'react';

import useVideoDescription from '../../hooks/useVideoDescription';
import { IVideoDetails } from '../../interface/video';
import { formatNumber } from '../../utils/utilMethods';
import Card from '../Card';
import { VideoCardLoader } from '../Loaders';
import Text from '../Text';

interface IProps {
  loading: boolean;
  video?: IVideoDetails;
}

const VideoCard: FC<IProps> = ({ loading, video }) => {
  const { formatText } = useVideoDescription();

  if (loading) {
    return <VideoCardLoader />;
  }

  if (!video) {
    return null;
  }

  return (
    <Card
      paddingX="0"
      paddingY="0"
      classNames="h-[400px] bg-black overflow-y-auto"
    >
      <div className="relative">
        <img
          src={video.image}
          style={{ height: '100%' }}
          className="block w-full h-full"
          alt="..."
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute  top-[100px] left-5 flex items-center justify-center  text-white">
          <div className="flex flex-col gap-4">
            <Text text={video.title} size={30} color="base_white" />
            <div className="flex flex-row gap-6">
              <div>
                <Text text="Views" size={18} color="text-gray_300" />
                <Text
                  text={formatNumber(Number(video.viewCount))}
                  size={20}
                  color="text-base_white"
                />
              </div>
              <div>
                <Text text="Likes" size={18} color="text-gray_300" />
                <Text
                  text={formatNumber(Number(video.likeCount))}
                  size={20}
                  color="text-base_white"
                />
              </div>
            </div>
            <div>{formatText(video.description)}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
