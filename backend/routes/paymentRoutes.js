const express = require("express")
const router = express.Router()
const Stripe = require("stripe")

//const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// CREATE PAYMENT
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr",
            product_data: {
              name: "Northern Escape Booking",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    })

    res.json({ id: session.id })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router