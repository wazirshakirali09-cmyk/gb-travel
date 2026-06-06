const Booking = require("../models/Booking")

const createBooking = async (req, res) => {
  try {
    console.log("Booking Request:", req.body)

    const booking = await Booking.create(req.body)

    res.status(201).json({
      success: true,
      booking,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      { new: true }
    )

    res.status(200).json({
      success: true,
      booking,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  createBooking,
  getBookings,
  updateBookingStatus,
}