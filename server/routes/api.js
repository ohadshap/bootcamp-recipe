const express = require('express')
const request = require('request')
const router = express.Router()

router.get('/sanity', function (request, response) {
    response.send("OK")
})

router.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response) {
        console.log(response);
    
        res.send(response.body)
    })
})



module.exports = router