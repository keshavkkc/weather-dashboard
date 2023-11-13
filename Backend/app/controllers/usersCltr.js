const User = require('../models/user')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const usersCltr = {}

usersCltr.register = (req, res) => {
    const body = req.body
    const user = new User(body)

    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCltr.login = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password)
                    .then((result) => {
                        if (result) {
                            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
                            res.json({ token })
                        } else {
                            res.json({
                                notice: 'Invalid Password'
                            })
                        }
                    })
            } else {
                res.json({
                    notice: "Invalid Email"
                })
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCltr.account = (req, res) => {
    const tokenData = req.tokenData
    User.findById(tokenData._id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = usersCltr