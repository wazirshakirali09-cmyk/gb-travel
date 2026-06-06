const Hotel = require("../models/Hotel")

// Get All Hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()

    res.status(200).json({
      success: true,
      count: hotels.length,
      hotels,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

// Create Hotel
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body)

    res.status(201).json({
      success: true,
      hotel,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  getHotels,
  createHotel,
}