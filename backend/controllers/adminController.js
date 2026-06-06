const Hotel = require("../models/Hotel")
const Car = require("../models/Car")
const Tour = require("../models/Tour")
const Booking = require("../models/Booking")

const getStats = async (req, res) => {
  try {
    const hotels = await Hotel.countDocuments()
    const cars = await Car.countDocuments()
    const tours = await Tour.countDocuments()
    const bookings = await Booking.countDocuments()

    res.json({
      success: true,
      data: {
        hotels,
        cars,
        tours,
        bookings,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = { getStats }