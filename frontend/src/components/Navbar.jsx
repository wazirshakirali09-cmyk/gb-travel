import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const token = localStorage.getItem("adminToken")

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    alert("Logged Out Successfully ✅")
    navigate("/admin-login")
  }

  return (
    <nav className="w-full bg-black relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          Northern Escape
        </h1>

        {/* Hamburger Icon (Mobile aur small screens par show hoga) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white md:hidden block focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links (Badi screens par line mein aayenge, mobile par hide rahenge) */}
        <div className="hidden md:flex items-center gap-6 text-lg text-white">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/hotels" className="hover:text-cyan-400 transition">Hotels</Link>
          <Link to="/cars" className="hover:text-cyan-400 transition">Cars</Link>
          <Link to="/tours" className="hover:text-cyan-400 transition">Tours</Link>
          <Link to="/booking" className="hover:text-cyan-400 transition">Booking</Link>
          <Link to="/admin" className="hover:text-cyan-400 transition">Admin</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link>
          {token && (
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold">
              Logout
            </button>
          )}
        </div>

      </div>

      {/* Mobile Menu Dropdown (Sirf button click hone par niche khulega) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-4 py-6 text-lg text-white shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Home</Link>
          <Link to="/hotels" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Hotels</Link>
          <Link to="/cars" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Cars</Link>
          <Link to="/tours" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Tours</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Booking</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Admin</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition w-full text-center py-2">Contact</Link>
          {token && (
            <button onClick={() => { handleLogout(); setIsOpen(false); }} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold my-2">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  )
}
