const express = require("express")
const router = express.Router()
const usersCltr = require("../app/controllers/usersCltr")


router.post("/api/users/register", usersCltr.register)
router.post("/api/users/login", usersCltr.login)

module.exports = router