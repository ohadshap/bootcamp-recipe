$("#search").on("click", function() {
    let theIngredient = $("input").val()
    $.get(`/recipes/${theIngredient}`, function(recipes) {
        $("#content").append(`<div>${recipes}</div>`)
        console.log(`${recipes}`);
        
    })
})