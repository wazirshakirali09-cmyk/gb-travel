const mongoose = require("mongoose")
require("dotenv").config()

const Tour = require("./models/Tour")

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Tour.create({
      name: "Skardu Adventure",
      days: "5 Days Tour",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description:
        "Explore Skardu valleys, lakes and mountains.",
    })

    console.log("Tour Added ✅")

    process.exit()
  })
  .catch((err) => {
    console.log(err)
  })