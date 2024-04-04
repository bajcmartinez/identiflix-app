import { IdentiflixPlaylist } from '../../types/video'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useRef } from 'react'
import VideoPreview from './VideoPreview'

type Props = {
  playlist: IdentiflixPlaylist;
}

export default function ({ playlist } : Props) {
  const rowRef = useRef<HTMLDivElement>(null)


  const slideLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft = rowRef.current.scrollLeft - 500;
    }
  };

  //event listener function to manipulate DOM slider elements to scroll when clicked using the unique id for each row
  const slideRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft = rowRef.current.scrollLeft + 500;
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{playlist.title}</h2>
      <div className="relative flex items-center group px-8">
        <FiChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />

        <div
          ref={rowRef}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* map function to create a new array populated with the results from the movies api call state and a key to identify which items have changed in the array */}
          {playlist.videos.map((video, id) => (
            <VideoPreview key={id} video={video} />
          ))}
        </div>

        <FiChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
}
