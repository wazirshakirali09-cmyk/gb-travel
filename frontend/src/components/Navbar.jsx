import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Cars", path: "/cars" },
    { name: "Tours", path: "/tours" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-black/40
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        md:px-6
        py-4
        flex
        justify-between
        items-center
        w-full
        "
      >
        {/* Logo */}

        <h1
          className="
          text-lg
          sm:text-xl
          md:text-3xl
          font-black
          text-cyan-400
          tracking-normal
          whitespace-nowrap
          "
        >
          Northern
          <span className="text-white ml-1">
            Escape
          </span>
        </h1>

        {/* Desktop Links */}

        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`
              relative
              text-white
              hover:text-cyan-400
              transition
              duration-300
              ${
                location.pathname === link.path
                  ? "text-cyan-400"
                  : ""
              }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}

        <button
          className="
          md:hidden
          text-white
          text-2xl
          flex-shrink-0
          "
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          md:hidden
          bg-black/95
          border-t
          border-white/10
          py-5
          text-center
          "
        >
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="
              block
              py-3
              text-white
              hover:text-cyan-400
              transition
              "
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}