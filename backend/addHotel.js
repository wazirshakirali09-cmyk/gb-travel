const mongoose = require("mongoose")
require("dotenv").config()

const Hotel = require("./models/Hotel")

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  await Hotel.create({
    name: "Shalimar Hotel",
    location: "Skardu",
    price: 5000,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    description:
      "Luxury hotel in Skardu with beautiful mountain views",
  })

  console.log("Hotel Added ✅")

  process.exit()

})
.catch((err) => {
  console.log(err)
})