export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white py-10 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>

          <h1 className="text-3xl font-bold text-cyan-400">
            Northern Escape
          </h1>

          <p className="mt-4 text-gray-400">
            Explore the beauty of Gilgit Baltistan
            with luxury tours, hotels and cars.
          </p>

        </div>

        {/* Links */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-gray-400">

            <a href="#">Home</a>
            <a href="#">Hotels</a>
            <a href="#">Cars</a>
            <a href="#">Tours</a>

          </div>

        </div>

        {/* Contact */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            Skardu, Gilgit Baltistan
          </p>

          <p className="text-gray-400 mt-2">
            +92 327 4399093
          </p>

          <p className="text-gray-400 mt-2">
            wazirshakirali09@gmail.com
          </p>

        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 Northern Escape. All rights reserved.
      </div>

    </footer>
  )
}