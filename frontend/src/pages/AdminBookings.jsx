import { useEffect, useState } from "react"

export default function AdminBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings")
      const data = await res.json()
      setBookings(data.bookings || [])
    } catch (err) {
      console.log(err)
    }
  }

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })

    fetchBookings()
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        Admin Bookings
      </h1>

      <div className="max-w-6xl mx-auto">

        {bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found</p>
        ) : (
          bookings.map((b) => (
            <div key={b._id} className="bg-gray-900 p-6 rounded mb-4">

              <h2 className="text-xl font-bold">{b.customerName}</h2>
              <p>{b.customerEmail}</p>
              <p>{b.phone}</p>
              <p>{b.serviceType}</p>
              <p>{b.itemName}</p>

              <p className="mt-2 text-cyan-400">{b.status}</p>

              <div className="flex gap-3 mt-3">

                <button onClick={() => updateStatus(b._id, "confirmed")} className="bg-green-600 px-4 py-2 rounded">
                  Confirm
                </button>

                <button onClick={() => updateStatus(b._id, "cancelled")} className="bg-red-600 px-4 py-2 rounded">
                  Cancel
                </button>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  )
}