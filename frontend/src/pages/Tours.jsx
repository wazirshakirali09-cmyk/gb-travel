import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Tours() {
  const navigate = useNavigate()

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    try {
      const res = await fetch(
        "https://gb-travel-1.onrender.com/api/tours"
      )

      const data = await res.json()

      setTours(data.tours)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white pt-40 text-center text-3xl">
        Loading Tours...
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">
      <h1 className="text-6xl font-bold text-center mb-16">
        Premium Tours
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {tours.map((tour) => (
          <div
            key={tour._id}
            className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 transition"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">
                {tour.name}
              </h2>

              <p className="mt-4 text-cyan-400 text-xl">
                {tour.days}
              </p>

              <p className="mt-4 text-gray-300">
                {tour.description}
              </p>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      serviceType: "tour",
                      itemName: tour.name,
                    },
                  })
                }
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold"
              >
                Explore Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}