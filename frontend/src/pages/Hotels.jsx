import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BASE_URL from "../config/api"
import Loader from "../components/Loader"

export default function Hotels() {

const [hotels, setHotels] = useState([])
const [loading, setLoading] = useState(true)

const navigate = useNavigate()

useEffect(() => {
fetchHotels()
}, [])

const fetchHotels = async () => {
try {
const res = await fetch(`${BASE_URL}/hotels`)
const data = await res.json()


  const list =
    data.hotels ||
    data.data ||
    data ||
    []

  setHotels(Array.isArray(list) ? list : [])
} catch (error) {
  console.log("Hotels API Error:", error)
  setHotels([])
}

setLoading(false)


}

if (loading) return <Loader />

return ( <div className="bg-black min-h-screen text-white pt-36 px-6">


  <h1 className="text-5xl font-bold text-center mb-16">
    Luxury Hotels
  </h1>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {hotels.length > 0 ? (
      hotels.map((hotel) => (
        <div
          key={hotel._id}
          className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800"
        >

          <img
            src={hotel.image}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">

            <h2 className="text-2xl font-bold">
              {hotel.name}
            </h2>

            <p className="text-gray-400 mt-2">
              {hotel.location}
            </p>

            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    serviceType: "hotel",
                    itemName: hotel.name
                  }
                })
              }
              className="mt-5 w-full bg-cyan-500 py-3 rounded-xl font-bold"
            >
              Book Now
            </button>

          </div>

        </div>
      ))
    ) : (
      <div className="text-center col-span-full text-gray-400">
        No Hotels Found
      </div>
    )}

  </div>
</div>


)
}
