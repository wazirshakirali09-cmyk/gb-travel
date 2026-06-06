const express = require("express")
const router = express.Router()

const {
  getCars,
  createCar,
  deleteCar,
} = require("../controllers/carController")

router.get("/", getCars)
router.post("/", createCar)
router.delete("/:id", deleteCar)

module.exports = router