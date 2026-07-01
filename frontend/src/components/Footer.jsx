export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400">
            Northern Escape
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Luxury Hotels, Cars and Tours
            for Gilgit Baltistan and
            Northern Pakistan.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-xl mb-5">
            Quick Links
          </h2>

          <div className="space-y-3">

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Home
            </p>

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Hotels
            </p>

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Cars
            </p>

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Tours
            </p>

          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-bold text-xl mb-5">
            Services
          </h2>

          <div className="space-y-3">

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Hotel Booking
            </p>

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Car Rentals
            </p>

            <p className="text-gray-400 hover:text-cyan-400 transition cursor-pointer">
              Tour Packages
            </p>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-500">
        © 2026 Northern Escape | All Rights Reserved
      </div>

    </footer>
  )
}