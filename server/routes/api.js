const express = require('express')
const request = require('request')
const router = express.Router()

router.get('/sanity', function (request, response) {
    response.send("OK")
})

router.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response) {
        let recipes = JSON.parse(response.body).results 
        let recipeRelevantInfo = []
        for(let recipe of recipes) {
            let newRecipe = {
                title: recipe.title,
                ingredients: recipe.ingredients,
                video: recipe.href,
                img: recipe.thumbnail
            }
            recipeRelevantInfo.push(newRecipe)
        }
        res.send(recipeRelevantInfo)
    })
})



module.exports = router