import { IdentiflixVideo } from '../../types/video'
import { NavLink } from 'react-router-dom'

type Props = {
  video: IdentiflixVideo;
}

export default function({ video }: Props) {
  return (
    <NavLink to={`/watch/${video.id}`}>
      <div className="w-[160px] sm:w-[200px] md:w[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
        {/* poster path image object using base url with sizing and template literal with optional chaining(?.) to read nested value in object and event handler function passed a prop for onClick functionality */}
        <img
          className="transform transition inline-block duration-300 hover:scale-110"
          src={video.thumbnail}
          alt={video.title}
        />
      </div>
    </NavLink>
  );
}
