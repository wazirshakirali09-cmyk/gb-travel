import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BASE_URL from "../config/api"
import Loader from "../components/Loader"

export default function Tours() {

const [tours, setTours] = useState([])
const [loading, setLoading] = useState(true)

const navigate = useNavigate()

useEffect(() => {
fetchTours()
}, [])

const fetchTours = async () => {
try {
const res = await fetch(`${BASE_URL}/tours`)
const data = await res.json()


  const list =
    data.tours ||
    data.data ||
    data ||
    []

  setTours(Array.isArray(list) ? list : [])
} catch (error) {
  console.log("Tours API Error:", error)
  setTours([])
}

setLoading(false)


}

if (loading) return <Loader />

return ( <div className="bg-black min-h-screen text-white pt-36 px-6">


  <h1 className="text-5xl font-bold text-center mb-16">
    Premium Tours
  </h1>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {tours.length > 0 ? (
      tours.map((tour) => (
        <div key={tour._id} className="bg-gray-900 rounded-3xl p-6">

          <img
            src={tour.image}
            className="h-72 w-full object-cover rounded-xl"
          />

          <h2 className="text-2xl font-bold mt-4">
            {tour.name}
          </h2>

          <button
            onClick={() =>
              navigate("/booking", {
                state: {
                  serviceType: "tour",
                  itemName: tour.name
                }
              })
            }
            className="mt-5 w-full bg-cyan-500 py-3 rounded-xl font-bold"
          >
            Explore Tour
          </button>

        </div>
      ))
    ) : (
      <div className="text-center col-span-full text-gray-400">
        No Tours Found
      </div>
    )}

  </div>
</div>


)
}
