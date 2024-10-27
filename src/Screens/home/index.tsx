import { useEffect, useState } from 'react';
import { WretchError } from 'wretch';

import PageTitle from '../../components/PageTitle';
import SearchInput from '../../components/SearchInput';
import VideoCard from '../../components/VideoCard';
import VideoComments from '../../components/VideoComment';
import { useVideo, useVideoComment } from '../../hooks/useQueryFn';
import useToast from '../../hooks/useToast';
import { getError } from '../../utils/error';

const Home = () => {
  const toast = useToast();
  const [id, setId] = useState('');
  const [pageToken, setPageToken] = useState('');
  const [pageTokens, setPageTokens] = useState<string[]>([]);

  const videoResult = useVideo(id);
  const videoCommentResult = useVideoComment(id, { pageToken });

  useEffect(() => {
    if (videoResult.isError || videoCommentResult.isError) {
      const error = getError(
        (videoResult.error ||
          videoCommentResult.error) as unknown as WretchError,
      );
      toast.error(error?.message || 'An error occured');
    }
  }, [
    getError(
      (videoResult.error || videoCommentResult.error) as unknown as WretchError,
    ).code,
  ]);

  const debounceFunction = (
    fn: (arg: unknown) => unknown,
    time: number,
  ): ((arg?: unknown) => Promise<void>) => {
    let timer: NodeJS.Timeout;
    return async function (arg: unknown) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(arg);
      }, time);
    };
  };

  const debounceFn = debounceFunction(handleSearchChange, 800);
  function handleSearchChange(val: unknown) {
    setId(val as string);
    setPageToken('');
    setPageTokens([]);
  }

  function handleLoadNextComments() {
    if (videoCommentResult.data) {
      const newToken = videoCommentResult?.data?.data?.nextPageToken;
      if (newToken !== pageToken)
        if (newToken) {
          setPageTokens([...pageTokens, newToken]);
        }
      setPageToken(newToken ?? '');
    }
  }

  function handleLoadPrevComments() {
    if (videoCommentResult.data) {
      const newToken = videoCommentResult?.data?.data?.nextPageToken;
      if (newToken !== pageToken)
        if (newToken) {
          const pageTokenArr = [...pageTokens];
          if (pageTokenArr.length >= 1) {
            pageTokenArr.pop();
            setPageTokens(pageTokenArr);
          }
          setPageToken(pageTokenArr[pageTokenArr.length - 1] ?? '');
        }
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <PageTitle
        title="Your personalized video application"
        description="Enter the id of the video you are looking for in the input below"
      />
      <div className="w-[100%] lg:w-[50%]">
        <SearchInput
          name="search"
          placeholder="Enter the ID of the video you are looking for"
          id="Search"
          onChange={(e) => debounceFn(e.target.value)}
        />
      </div>

      <VideoCard
        loading={videoResult.isFetching}
        video={videoResult.data?.data}
      />
      <div className="w-full">
        <VideoComments
          loading={videoCommentResult.isFetching}
          comments={videoCommentResult.data?.data.items}
          loadNext={handleLoadNextComments}
          showNext={!!pageToken || !pageTokens.length}
          loadPrev={handleLoadPrevComments}
          showPrev={!!pageTokens.length}
        />
      </div>
    </div>
  );
};

export default Home;
