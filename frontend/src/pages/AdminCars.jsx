import { useEffect, useState } from "react";

export default function AdminCars() {
const [cars, setCars] = useState([]);

const [form, setForm] = useState({
name: "",
brand: "",
pricePerDay: "",
image: "",
description: "",
});

useEffect(() => {
fetchCars();
}, []);

const fetchCars = async () => {
const res = await fetch(
"https://gb-travel-1.onrender.com/api/cars"
);


const data = await res.json();
setCars(data.cars || []);


};

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value,
});
};

const addCar = async (e) => {
e.preventDefault();


await fetch(
  "https://gb-travel-1.onrender.com/api/cars",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
);

setForm({
  name: "",
  brand: "",
  pricePerDay: "",
  image: "",
  description: "",
});

fetchCars();


};

const deleteCar = async (id) => {
await fetch(
`https://gb-travel-1.onrender.com/api/cars/${id}`,
{
method: "DELETE",
}
);


fetchCars();


};

return ( <div className="bg-black min-h-screen text-white pt-32 px-4 md:px-8">

  <div className="max-w-7xl mx-auto">

    <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-center">
      Admin Cars Dashboard
    </h1>

    {/* Form */}
    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 mb-12">

      <h2 className="text-2xl font-bold mb-6">
        Add New Car
      </h2>

      <form
        onSubmit={addCar}
        className="grid md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-xl bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
          className="p-3 rounded-xl bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="number"
          name="pricePerDay"
          placeholder="Price Per Day"
          value={form.pricePerDay}
          onChange={handleChange}
          className="p-3 rounded-xl bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="p-3 rounded-xl bg-gray-800 border border-gray-700"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="md:col-span-2 p-3 rounded-xl bg-gray-800 border border-gray-700"
          rows="4"
          required
        />

        <button
          type="submit"
          className="md:col-span-2 bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-bold text-lg transition"
        >
          Add Car
        </button>
      </form>
    </div>

    {/* Cars Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {cars.map((car) => (
        <div
          key={car._id}
          className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500 transition duration-300"
        >
          <img
            src={car.image}
            alt={car.name}
            className="h-64 w-full object-cover"
          />

          <div className="p-5">

            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
              {car.brand}
            </span>

            <h2 className="text-2xl font-bold mt-3">
              {car.name}
            </h2>

            <p className="text-cyan-400 text-xl mt-3">
              PKR {car.pricePerDay} / Day
            </p>

            <p className="text-gray-400 mt-3">
              {car.description}
            </p>

            <button
              onClick={() => deleteCar(car._id)}
              className="w-full mt-5 bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold"
            >
              Delete Car
            </button>

          </div>
        </div>
      ))}

    </div>

  </div>

</div>


);
}
