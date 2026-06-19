import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin-login")
  }

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch(
        "https://gb-travel-1.onrender.com/api/admin/stats"
      )

      const data = await res.json()

      setStats(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!stats) {
    return (
      <div className="bg-black min-h-screen text-white pt-40 text-center text-3xl">
        Loading Dashboard...
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">

      <div className="flex justify-between items-center max-w-6xl mx-auto mb-12">
        <h1 className="text-5xl font-bold">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold">
            Hotels
          </h2>

          <p className="text-5xl text-cyan-400 mt-4">
            {stats.hotels}
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold">
            Cars
          </h2>

          <p className="text-5xl text-cyan-400 mt-4">
            {stats.cars}
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold">
            Tours
          </h2>

          <p className="text-5xl text-cyan-400 mt-4">
            {stats.tours}
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold">
            Bookings
          </h2>

          <p className="text-5xl text-cyan-400 mt-4">
            {stats.bookings}
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-4 gap-6">

        <Link
          to="/admin/hotels"
          className="bg-cyan-500 hover:bg-cyan-600 p-6 rounded-2xl text-center font-bold text-xl"
        >
          Manage Hotels
        </Link>

        <Link
          to="/admin/cars"
          className="bg-cyan-500 hover:bg-cyan-600 p-6 rounded-2xl text-center font-bold text-xl"
        >
          Manage Cars
        </Link>

        <Link
          to="/admin/tours"
          className="bg-cyan-500 hover:bg-cyan-600 p-6 rounded-2xl text-center font-bold text-xl"
        >
          Manage Tours
        </Link>

        <Link
          to="/admin/bookings"
          className="bg-cyan-500 hover:bg-cyan-600 p-6 rounded-2xl text-center font-bold text-xl"
        >
          Manage Bookings
        </Link>

      </div>

    </div>
  )
}