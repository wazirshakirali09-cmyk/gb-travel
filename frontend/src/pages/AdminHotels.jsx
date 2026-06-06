import { useEffect, useState } from "react"

export default function AdminHotels() {
  const [hotels, setHotels] = useState([])

  const [form, setForm] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
    description: "",
  })

  useEffect(() => {
    fetchHotels()
  }, [])

  const fetchHotels = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/hotels")
      const data = await res.json()

      setHotels(data.hotels || [])
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const addHotel = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    setForm({
      name: "",
      location: "",
      price: "",
      image: "",
      description: "",
    })

    fetchHotels()
  }

  const deleteHotel = async (id) => {
    await fetch(`http://localhost:5000/api/hotels/${id}`, {
      method: "DELETE",
    })

    fetchHotels()
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">
      <h1 className="text-5xl font-bold mb-10">
        Admin Hotels
      </h1>

      <form
        onSubmit={addHotel}
        className="max-w-2xl flex flex-col gap-4 mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black"
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold"
        >
          Add Hotel
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold">
                {hotel.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {hotel.location}
              </p>

              <p className="text-cyan-400 mt-2">
                PKR {hotel.price}
              </p>

              <p className="mt-2">
                {hotel.description}
              </p>

              <button
                onClick={() => deleteHotel(hotel._id)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded mt-4"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}