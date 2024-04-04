import PlaylistPreview from '../components/PlaylistPreview'
import { useState } from 'react'
import { getPlaylists, getVideo } from '../services/video'
import UserNavbar from '../components/UserNavbar'
import { NavLink } from 'react-router-dom'

export default function () {
  const [playlists] = useState(getPlaylists());
  const [featuredVideo] = useState(getVideo("vVM1Tpu9QB4"))

  return (
    <div className="overflow-hidden bg-gray-900">
      <UserNavbar />
      <div className="p-20 grid grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            {featuredVideo.title}
          </h1>
          <p className="my-6 text-lg leading-8 text-gray-400">
            <pre className="whitespace-break-spaces line-clamp-4">
              {featuredVideo.description}
            </pre>
          </p>
          <NavLink
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            to={`/watch/${featuredVideo.id}`}
          >
            Play
          </NavLink>
        </div>
        <div>
          <img
            className="transform inline-block"
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
          />
        </div>
      </div>

      {playlists.map(playlist => (
        <PlaylistPreview key={playlist.id} playlist={playlist}/>
      ))}
    </div>
  )
}
