import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cars() {
  const navigate = useNavigate()

  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
    try {
      const res = await fetch(
        "https://gb-travel-1.onrender.com/api/cars"
      )

      const data = await res.json()

      setCars(data.cars)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white pt-40 text-center text-3xl">
        Loading Cars...
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">
      <h1 className="text-6xl font-bold text-center mb-16">
        Luxury Cars
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:scale-105 transition"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">
                {car.name}
              </h2>

              <p className="mt-2 text-gray-400">
                {car.brand}
              </p>

              <p className="mt-4 text-cyan-400 text-xl">
                PKR {car.pricePerDay} / Day
              </p>

              <p className="mt-4 text-gray-300">
                {car.description}
              </p>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      serviceType: "car",
                      itemName: car.name,
                    },
                  })
                }
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-2xl font-semibold"
              >
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}