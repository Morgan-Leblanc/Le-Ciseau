 
// REQUIRE what we need :
const express = require("express")
const connection = require('../../config/config')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Route = /haircut").status(200)
})


module.exports = router