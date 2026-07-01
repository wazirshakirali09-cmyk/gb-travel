import { BrowserRouter, Routes, Route } from "react-router-dom";







import Navbar from "./components/Navbar";



import Footer from "./components/Footer";



import WhatsAppButton from "./components/WhatsAppButton";







import Home from "./pages/Home";



import Hotels from "./pages/Hotels";



import Cars from "./pages/Cars";



import Tours from "./pages/Tours";



import Booking from "./pages/Booking";



import Contact from "./pages/Contact";







import AdminLogin from "./pages/AdminLogin";



import AdminDashboard from "./pages/AdminDashboard";



import AdminHotels from "./pages/AdminHotels";



import AdminCars from "./pages/AdminCars";



import AdminTours from "./pages/AdminTours";



import AdminBookings from "./pages/AdminBookings";







import ProtectedRoute from "./ProtectedRoute";







export default function App() {



  return (



    <BrowserRouter>



      <Navbar />







      <div className="pt-20 min-h-screen bg-black text-white">



        <Routes>



          <Route path="/" element={<Home />} />



          <Route path="/hotels" element={<Hotels />} />



          <Route path="/cars" element={<Cars />} />



          <Route path="/tours" element={<Tours />} />



          <Route path="/booking" element={<Booking />} />



          <Route path="/contact" element={<Contact />} />







          <Route path="/admin-login" element={<AdminLogin />} />







          <Route



            path="/admin"



            element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}



          />



          <Route



            path="/admin/hotels"



            element={<ProtectedRoute><AdminHotels /></ProtectedRoute>}



          />



          <Route



            path="/admin/cars"



            element={<ProtectedRoute><AdminCars /></ProtectedRoute>}



          />



          <Route



            path="/admin/tours"



            element={<ProtectedRoute><AdminTours /></ProtectedRoute>}



          />



          <Route



            path="/admin/bookings"



            element={<ProtectedRoute><AdminBookings /></ProtectedRoute>}



          />



        </Routes>



      </div>







      <Footer />



      <WhatsAppButton />



    </BrowserRouter>



  );



}