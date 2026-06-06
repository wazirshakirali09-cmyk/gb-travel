const mongoose = require("mongoose")
require("dotenv").config()

const Car = require("./models/Car")

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Car.create({
      name: "Toyota Crown",
      brand: "Toyota",
      pricePerDay: 18000,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      description:
        "Luxury Toyota Crown available for Skardu tours",
    })

    console.log("Car Added ✅")

    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })