import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert("Please fill required fields")
      return
    }

    alert("Message Sent Successfully ✅")

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="bg-black min-h-screen text-white pt-36 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-6xl font-bold text-center mb-16">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-10 rounded-3xl border border-gray-800"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-black border border-gray-700 p-4 rounded-2xl w-full mb-4"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-black border border-gray-700 p-4 rounded-2xl w-full mb-4"
          />

          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-black border border-gray-700 p-4 rounded-2xl w-full mb-4"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="bg-black border border-gray-700 p-4 rounded-2xl w-full mb-4"
          />

          <button
            type="submit"
            className="bg-cyan-500 px-6 py-3 rounded-2xl font-bold w-full"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}