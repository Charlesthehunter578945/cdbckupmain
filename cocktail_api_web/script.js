$(Document).ready(function() {
    $("#btnDrink").click(function() {
        $.get("https://www.thecocktaildb.com/api/json/v1/1/random.php", 
            function(data) {
                //La data tiene la informacion de la bebida
                console.log(data);
                console.log("Hola esto es una prueba");
        });
    });
});