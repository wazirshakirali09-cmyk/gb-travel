const express = require("express")
const router = express.Router()

router.post("/create-checkout-session", async (req, res) => {
res.status(503).json({
message: "Payment system temporarily disabled"
})
})

module.exports = router
