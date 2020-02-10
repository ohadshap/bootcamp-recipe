const renderer = new Renderer()
let currRecipes = []
$("#search").on("click", function() {
    let theIngredient = $("input").val()
    $.get(`/recipes/${theIngredient}`, function(recipes) {
        currRecipes = recipes
        renderer.render(recipes)  
    })
})

$("#content").on("click", ".card", function() {
    let index = $(this).closest("div").data().id
    let firstIngr = currRecipes[index].ingredients[0]
    console.log(firstIngr);
    
    
})