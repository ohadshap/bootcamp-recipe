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
        for(let recipe in recipes) {
            let theRecipe = recipes[recipe]
            let newRecipe = {
                title: theRecipe.title,
                ingredients: theRecipe.ingredients,
                video: theRecipe.href || "",
                img: theRecipe.thumbnail,
                id: recipe
            }
            recipeRelevantInfo.push(newRecipe)
        }
        res.send(recipeRelevantInfo)
    })
})



module.exports = router