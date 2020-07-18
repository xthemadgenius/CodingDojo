const { response } = require("express")

module.exports.index = (requset, response) => {
    response.json({
        message: "Hello world",
    })
}