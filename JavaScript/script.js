function mensajeAlerta() {
    alert("EN BOGOTÁ 5199419")
}


$('.btn-ver-menu').on('click', function name(params) {

    $('.pagina-izquierda').addClass("pagina-izquierda2");

    setTimeout(function name(params) {

        $('.pagina-derecha').addClass("pagina-derecha2");
        
    }, 300)
    
})

$('.btn-cerrar').on('click', function name(params) {
        
        $('.pagina-derecha').removeClass("pagina-derecha2");

    setTimeout(function name(params) {

        $('.pagina-izquierda').removeClass("pagina-izquierda2");   
        
    }, 300)
    
})

$('.lista-uno p').mouseover(function name(params) {
    $(this).css("color", "#00CCFF")
})

$('.lista-dos p').mouseover(function name(params) {
    $(this).css("color", "#00CCFF")
})

$('.lista-tres p').mouseover(function name(params) {
    $(this).css("color", "#00CCFF")
})

$('.lista-uno p').mouseout(function name(params) {
    $(this).css("color", "black")
})

$('.lista-dos p').mouseout(function name(params) {
    $(this).css("color", "black")
})

$('.lista-tres p').mouseout(function name(params) {
    $(this).css("color", "black")
})