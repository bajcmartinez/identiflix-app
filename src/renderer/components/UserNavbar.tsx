import { useNavigate } from 'react-router-dom'

export default function() {
  const navigate = useNavigate();

  async function logout() {
    navigate('/');
  }

  return (
    <nav className="bg-gray-800 flex justify-end">
      <div className="flex space-x-4">
        <button onClick={logout} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          Log out
        </button>
      </div>
    </nav>
  )
}
