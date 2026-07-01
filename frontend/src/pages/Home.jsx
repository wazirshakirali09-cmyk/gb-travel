import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}

      <section
        className="min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b')"
        }}
      >
        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Glow */}

        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500 opacity-20 blur-[120px]"></div>

        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 opacity-20 blur-[100px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <p className="text-cyan-400 font-semibold tracking-[4px] mb-4">
              NORTHERN PAKISTAN EXPERIENCE
            </p>

            <h1 className="text-5xl md:text-8xl font-black leading-tight">

              Explore

              <span className="block text-cyan-400">
                Gilgit Baltistan
              </span>

            </h1>

            <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl">
              Discover luxury hotels, amazing tours,
              comfortable rides and unforgettable
              adventures in Skardu, Hunza and Northern Pakistan.
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">

              <Link
                to="/hotels"
                className="
                px-8 py-4
                rounded-full
                bg-cyan-500
                font-bold
                hover:scale-105
                hover:bg-cyan-600
                transition
                "
              >
                Explore Hotels
              </Link>

              <Link
                to="/tours"
                className="
                px-8 py-4
                rounded-full
                border
                border-cyan-500
                hover:bg-cyan-500
                transition
                "
              >
                Explore Tours
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">
                50+
              </h1>

              <p className="mt-3 text-gray-300">
                Hotels
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">
                120+
              </h1>

              <p className="mt-3 text-gray-300">
                Tours
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">
                30+
              </h1>

              <p className="mt-3 text-gray-300">
                Cars
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 text-center">
              <h1 className="text-5xl font-bold text-cyan-400">
                5000+
              </h1>

              <p className="mt-3 text-gray-300">
                Happy Travelers
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURED SECTION */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-center mb-14">

            Featured Services

          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {/* HOTEL */}

            <div className="
            bg-gray-900
            rounded-3xl
            overflow-hidden
            hover:-translate-y-3
            transition
            duration-500
            ">

              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  Luxury Hotels
                </h2>

                <p className="text-gray-400 mt-3">
                  Premium hotels in Hunza and Skardu.
                </p>

              </div>

            </div>

            {/* CAR */}

            <div className="
            bg-gray-900
            rounded-3xl
            overflow-hidden
            hover:-translate-y-3
            transition
            duration-500
            ">

              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  Comfortable Cars
                </h2>

                <p className="text-gray-400 mt-3">
                  Reliable and luxury travel vehicles.
                </p>

              </div>

            </div>

            {/* TOUR */}

            <div className="
            bg-gray-900
            rounded-3xl
            overflow-hidden
            hover:-translate-y-3
            transition
            duration-500
            ">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold">
                  Adventure Tours
                </h2>

                <p className="text-gray-400 mt-3">
                  Explore mountains and valleys.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}