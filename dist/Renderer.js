class Renderer {
    constructor(){
    
    }

    render(data) {
        
        $("#content").empty()
        for(let i = 0; i < data.length; i++) {
            let recipe = data[i]
            const source = $('#recipe-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template(recipe);
            $("#content").append(newHTML);
        }    
    }

}