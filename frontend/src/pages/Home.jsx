import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">

        <div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Explore <span className="text-cyan-400">Gilgit Baltistan</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Luxury Hotels, Cars and Tours in Skardu, Hunza and Northern Pakistan.
          </p>

          <div className="mt-10 flex gap-5 justify-center flex-wrap">

            <Link to="/hotels" className="bg-cyan-500 px-6 py-3 rounded font-bold">
              Hotels
            </Link>

            <Link to="/cars" className="border border-cyan-500 px-6 py-3 rounded font-bold">
              Cars
            </Link>

            <Link to="/tours" className="border border-cyan-500 px-6 py-3 rounded font-bold">
              Tours
            </Link>

          </div>
        </div>

      </section>

    </div>
  )
}