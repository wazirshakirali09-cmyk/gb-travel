const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    customerEmail: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    serviceType: {
      type: String,
      enum: ["hotel", "car", "tour"],
      required: true,
    },

    itemName: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Booking", bookingSchema)