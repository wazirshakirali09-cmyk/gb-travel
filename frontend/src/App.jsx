import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import Cars from "./pages/Cars"
import Tours from "./pages/Tours"
import Contact from "./pages/Contact"
import Booking from "./pages/Booking"

import AdminLogin from "./pages/AdminLogin"

import AdminDashboard from "./pages/AdminDashboard"
import AdminBookings from "./pages/AdminBookings"
import AdminHotels from "./pages/AdminHotels"
import AdminCars from "./pages/AdminCars"
import AdminTours from "./pages/AdminTours"

import ProtectedRoute from "./ProtectedRoute"


export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">

        <Navbar />

        <div className="flex-grow">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/hotels"
              element={<Hotels />}
            />

            <Route
              path="/cars"
              element={<Cars />}
            />

            <Route
              path="/tours"
              element={<Tours />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/booking"
              element={<Booking />}
            />


            <Route
              path="/admin-login"
              element={<AdminLogin />}
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/bookings"
              element={
                <ProtectedRoute>
                  <AdminBookings />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/hotels"
              element={
                <ProtectedRoute>
                  <AdminHotels />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/cars"
              element={
                <ProtectedRoute>
                  <AdminCars />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/tours"
              element={
                <ProtectedRoute>
                  <AdminTours />
                </ProtectedRoute>
              }

            />

          </Routes>

        </div>

        <Footer />

      </div>
    </BrowserRouter>
  )
}