import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        "http://localhost:5000/api/admin-auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      )

      const data = await res.json()

      if (data.success) {
        localStorage.setItem(
          "adminToken",
          data.token
        )

        alert("Login Successful ✅")

        navigate("/admin")
      } else {
        alert(data.message)
      }

    } catch (error) {
      console.log(error)
      alert("Login Failed ❌")
    }
  }

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-10 rounded-3xl w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-3 mb-4 rounded bg-white text-black border border-gray-300 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 mb-4 rounded bg-white text-black border border-gray-300 outline-none"
        />

        <button
          type="submit"
          className="w-full p-3 mb-4 rounded bg-cyan-500 hover:bg-cyan-600 font-bold"
        >
          Login
        </button>
      </form>

    </div>
  )
}