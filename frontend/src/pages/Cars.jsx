import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BASE_URL from "../config/api"
import Loader from "../components/Loader"

export default function Cars() {

const [cars, setCars] = useState([])
const [loading, setLoading] = useState(true)

const navigate = useNavigate()

useEffect(() => {
fetchCars()
}, [])

const fetchCars = async () => {
try {
const res = await fetch(`${BASE_URL}/cars`)
const data = await res.json()


  const list =
    data.cars ||
    data.data ||
    data ||
    []

  setCars(Array.isArray(list) ? list : [])
} catch (error) {
  console.log("Cars API Error:", error)
  setCars([])
}

setLoading(false)


}

if (loading) return <Loader />

return ( <div className="bg-black min-h-screen text-white pt-36 px-6">


  <h1 className="text-5xl font-bold text-center mb-16">
    Luxury Cars
  </h1>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {cars.length > 0 ? (
      cars.map((car) => (
        <div key={car._id} className="bg-gray-900 rounded-3xl p-6">

          <img
            src={car.image}
            className="h-72 w-full object-cover rounded-xl"
          />

          <h2 className="text-2xl font-bold mt-4">
            {car.name}
          </h2>

          <button
            onClick={() =>
              navigate("/booking", {
                state: {
                  serviceType: "car",
                  itemName: car.name
                }
              })
            }
            className="mt-5 w-full bg-cyan-500 py-3 rounded-xl font-bold"
          >
            Rent Now
          </button>

        </div>
      ))
    ) : (
      <div className="text-center col-span-full text-gray-400">
        No Cars Found
      </div>
    )}

  </div>
</div>


)
}
