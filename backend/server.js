const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")

const uploadRoutes = require("./routes/uploadRoutes")
const bookingRoutes = require("./routes/bookingRoutes")
const hotelRoutes = require("./routes/hotelRoutes")
const carRoutes = require("./routes/carRoutes")
const tourRoutes = require("./routes/tourRoutes")
const adminRoutes = require("./routes/adminRoutes")
const adminAuthRoutes = require("./routes/adminAuthRoutes")

// Connect Database
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/upload", uploadRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/hotels", hotelRoutes)
app.use("/api/cars", carRoutes)
app.use("/api/tours", tourRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/admin-auth", adminAuthRoutes)
//app.use("/api/payment", require("./routes/paymentRoutes"))

// Home Route
app.get("/", (req, res) => {
  res.send("Northern Escape Backend Running 🚀")
})

// PORT
const PORT = process.env.PORT || 5000

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})