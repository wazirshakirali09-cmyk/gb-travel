import { useLocation } from "react-router-dom"
import { useState } from "react"

export default function Booking() {
  const { state } = useLocation()

  const [form, setForm] = useState({
    name: "",
    phone: "",
    persons: "",
    date: ""
  })

  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.persons || !form.date) {
      alert("Please fill all fields")
      return
    }

    setSuccess(true)

    setForm({
      name: "",
      phone: "",
      persons: "",
      date: ""
    })

    setTimeout(() => {
      setSuccess(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-black px-6 py-3 rounded-xl font-bold shadow-lg">
          Booking Confirmed Successfully ✅
        </div>
      )}

      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black">
          Complete Your <span className="text-cyan-400">Booking</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Fill details to reserve your trip
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>

          <div className="space-y-5">
            <div>
              <p className="text-gray-400">Service</p>
              <h2 className="text-cyan-400 text-xl font-bold">
                {state?.serviceType || "Not Selected"}
              </h2>
            </div>

            <div>
              <p className="text-gray-400">Selected Item</p>
              <h2 className="text-xl font-bold">
                {state?.itemName || "None"}
              </h2>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Your Information</h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
            />

            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
            />

            <input
              type="number"
              placeholder="Persons"
              name="persons"
              value={form.persons}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-cyan-400"
            />

            <button
              className="w-full bg-cyan-500 py-4 rounded-xl font-bold hover:bg-cyan-600 transition transform hover:scale-[1.02]"
            >
              Confirm Booking
            </button>

          </div>
        </form>

      </div>
    </div>
  )
}