const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    days: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Tour", tourSchema)