const mongoose = require('mongoose')

const configureDB = () => {
    mongoose
        .connect("mongodb://localhost:27017/weather-db")
        .then(() => {
            console.log("connected to db")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB