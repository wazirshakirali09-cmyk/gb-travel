import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const token = localStorage.getItem("adminToken")

  const handleLogout = () => {
    localStorage.removeItem("adminToken")

    alert("Logged Out Successfully ✅")

    navigate("/admin-login")
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-cyan-400">
          Northern Escape
        </h1>

        <div className="flex items-center gap-6 text-lg text-white">

          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/hotels"
            className="hover:text-cyan-400 transition"
          >
            Hotels
          </Link>

          <Link
            to="/cars"
            className="hover:text-cyan-400 transition"
          >
            Cars
          </Link>

          <Link
            to="/tours"
            className="hover:text-cyan-400 transition"
          >
            Tours
          </Link>

          <Link
            to="/booking"
            className="hover:text-cyan-400 transition"
          >
            Booking
          </Link>

          <Link
            to="/admin"
            className="hover:text-cyan-400 transition"
          >
            Admin
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  )
}