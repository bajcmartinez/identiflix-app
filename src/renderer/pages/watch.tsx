import PlaylistPreview from '../components/PlaylistPreview'
import { useEffect, useState } from 'react'
import { getPlaylists, getVideo } from '../services/video'
import { NavLink, useParams } from 'react-router-dom'
import { IdentiflixVideo } from '../../types/video'
import { FiX } from 'react-icons/fi'
import UserNavbar from '../components/UserNavbar'

export default function () {
  const { videoId } = useParams();
  const [video, setVideo] = useState<IdentiflixVideo | undefined>();

  useEffect(() => {
    setVideo(getVideo(videoId));
  }, [videoId])

  return (
    <div className="overflow-hidden bg-gray-900">
      <UserNavbar />
      {video ? (
        <>
          <div className="relative">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl px-8 my-10">{video.title}</h1>
            <NavLink to="/browse" className="absolute h-10 w-10 top-0 right-4">
              <FiX className="w-10 h-10 text-white" />
            </NavLink>
          </div>
          <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}></iframe>
        </>
      ) : (
        <>Loading</>
      )}
    </div>
  )
}
