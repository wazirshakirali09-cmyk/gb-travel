import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function Booking() {
  const location = useLocation()

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    phone: "",
    serviceType: "",
    itemName: "",
    startDate: "",
    endDate: "",
  })

  useEffect(() => {
    if (location.state) {
      setFormData((prev) => ({
        ...prev,
        serviceType: location.state.serviceType || "",
        itemName: location.state.itemName || "",
      }))
    }
  }, [location])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // ✅ CLEAN VALIDATION (ONLY ONCE)
    const { customerName, customerEmail, phone, serviceType, itemName, startDate, endDate } = formData

    if (!customerName || !customerEmail || !phone || !serviceType || !itemName || !startDate || !endDate) {
      alert("Please fill all fields")
      return
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Booking Saved Successfully ✅")

        setFormData({
          customerName: "",
          customerEmail: "",
          phone: "",
          serviceType: "",
          itemName: "",
          startDate: "",
          endDate: "",
        })
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
      alert("Booking Failed ❌")
    }
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">
      <h1 className="text-5xl font-bold text-center mb-10">Book Now</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">

        <input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Name" className="p-3 bg-white text-black rounded" />

        <input name="customerEmail" value={formData.customerEmail} onChange={handleChange} placeholder="Email" className="p-3 bg-white text-black rounded" />

        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-3 bg-white text-black rounded" />

        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="p-3 bg-white text-black rounded">
          <option value="">Select Service</option>
          <option value="hotel">Hotel</option>
          <option value="car">Car</option>
          <option value="tour">Tour</option>
        </select>

        <input name="itemName" value={formData.itemName} onChange={handleChange} placeholder="Item Name" className="p-3 bg-white text-black rounded" />

        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="p-3 bg-white text-black rounded" />

        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="p-3 bg-white text-black rounded" />

        <button className="bg-cyan-500 py-3 rounded font-bold">Submit Booking</button>

      </form>
    </div>
  )
}