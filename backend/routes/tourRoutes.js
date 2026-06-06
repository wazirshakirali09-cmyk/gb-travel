const express = require("express")
const router = express.Router()

const {
  getTours,
  createTour,
  deleteTour,
} = require("../controllers/tourController")

router.get("/", getTours)
router.post("/", createTour)
router.delete("/:id", deleteTour)

module.exports = router