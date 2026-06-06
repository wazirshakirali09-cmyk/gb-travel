import { useEffect, useState } from "react"

export default function AdminCars() {
  const [cars, setCars] = useState([])

  const [form, setForm] = useState({
    name: "",
    brand: "",
    pricePerDay: "",
    image: "",
    description: "",
  })

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
    const res = await fetch("http://localhost:5000/api/cars")
    const data = await res.json()

    setCars(data.cars)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const addCar = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:5000/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })

    setForm({
      name: "",
      brand: "",
      pricePerDay: "",
      image: "",
      description: "",
    })

    fetchCars()
  }

  const deleteCar = async (id) => {
    await fetch(`http://localhost:5000/api/cars/${id}`, {
      method: "DELETE",
    })

    fetchCars()
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">

      <h1 className="text-5xl font-bold mb-10">
        Admin Cars
      </h1>

      <form
        onSubmit={addCar}
        className="max-w-2xl flex flex-col gap-4 mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="p-3 rounded bg-white text-black border border-gray-300"
        />

        <input
          type="number"
          name="pricePerDay"
          placeholder="Price Per Day"
          value={form.pricePerDay}
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
          Add Car
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-6">

        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">

              <h2 className="text-2xl font-bold">
                {car.name}
              </h2>

              <p className="text-gray-400 mt-2">
                {car.brand}
              </p>

              <p className="text-cyan-400 mt-2">
                PKR {car.pricePerDay}
              </p>

              <p className="mt-2">
                {car.description}
              </p>

              <button
                onClick={() => deleteCar(car._id)}
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