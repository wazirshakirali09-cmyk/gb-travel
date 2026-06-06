import { useEffect, useState } from "react"

export default function AdminTours() {
  const [tours, setTours] = useState([])

  const [form, setForm] = useState({
    name: "",
    days: "",
    image: "",
    description: "",
  })

  useEffect(() => {
    fetchTours()
  }, [])

  const fetchTours = async () => {
    const res = await fetch("http://localhost:5000/api/tours")
    const data = await res.json()
    setTours(data.tours)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const addTour = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    setForm({
      name: "",
      days: "",
      image: "",
      description: "",
    })

    fetchTours()
  }

  const deleteTour = async (id) => {
    await fetch(`http://localhost:5000/api/tours/${id}`, {
      method: "DELETE",
    })

    fetchTours()
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">

      <h1 className="text-5xl font-bold mb-10">
        Admin Tours
      </h1>

      <form
        onSubmit={addTour}
        className="max-w-2xl flex flex-col gap-4 mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Tour Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <input
          type="text"
          name="days"
          placeholder="Days"
          value={form.days}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded font-bold"
        >
          Add Tour
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-6">

        {tours.map((tour) => (
          <div
            key={tour._id}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">

              <h2 className="text-2xl font-bold">
                {tour.name}
              </h2>

              <p className="text-cyan-400 mt-2">
                {tour.days}
              </p>

              <p className="mt-2">
                {tour.description}
              </p>

              <button
                onClick={() => deleteTour(tour._id)}
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