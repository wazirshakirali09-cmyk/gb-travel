import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Hotels() {
  const navigate = useNavigate()

  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = async () => {
    try {
      const res = await fetch(
        "https://gb-travel-1.onrender.com/api/hotels"
      )

      const data = await res.json()

      setHotels(data.hotels || [])
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white pt-40 text-center text-3xl">
        Loading Hotels...
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">
      <h1 className="text-6xl font-bold text-center mb-16">
        Luxury Hotels
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {Array.isArray(hotels) &&
  hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">
                {hotel.name}
              </h2>

              <p className="mt-2 text-gray-400">
                {hotel.location}
              </p>

              <p className="mt-4 text-cyan-400 text-xl">
                PKR {hotel.price} / Night
              </p>

              <p className="mt-4 text-gray-300">
                {hotel.description}
              </p>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      serviceType: "hotel",
                      itemName: hotel.name,
                    },
                  })
                }
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}