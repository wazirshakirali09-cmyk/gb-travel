const Car = require("../models/Car")

const getCars = async (req, res) => {
  try {
    const cars = await Car.find()

    res.status(200).json({
      success: true,
      count: cars.length,
      cars,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body)

    res.status(201).json({
      success: true,
      car,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      message: "Car deleted",
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  getCars,
  createCar,
  deleteCar,
}