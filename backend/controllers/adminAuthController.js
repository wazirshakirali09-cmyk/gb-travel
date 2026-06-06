const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email })

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      })
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    )

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      })
    }

    const token = jwt.sign(
      {
        id: admin._id,
      },
      "northernescape_secret",
      {
        expiresIn: "7d",
      }
    )

    res.status(200).json({
      success: true,
      token,
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  loginAdmin,
}