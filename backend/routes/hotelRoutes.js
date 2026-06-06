const express = require("express")
const router = express.Router()

const Hotel = require("../models/Hotel")

// GET all hotels
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find()

    res.json({
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
})

// ADD hotel
router.post("/", async (req, res) => {
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
})

// DELETE hotel
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)

    res.json({
      success: true,
      message: "Hotel deleted",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
})

module.exports = router