import SearchEngineCard from '@/components/SearchEngineCard';

import videoBg from './bh.mp4';

const SearchEngine = () => {
  return (
    <>
      <div className="relative z-0 h-[calc(100vh-54px)] flex items-center justify-center">
        <video
          className="absolute w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        <SearchEngineCard />
      </div>
    </>
  );
};

export default SearchEngine;
