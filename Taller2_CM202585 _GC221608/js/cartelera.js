var peliculas={
    "movie":[
        {
            "Img":"imagenes/narnia.jpg",
            "TituloPelicula":"Las Crónicas de Narnia 2",
            "DuracionPelicula":"2h 30m",
            "Clasificion":"Familiar",
            "TipoButacas": "Asiento VIP, Asiento normal, con brazo, Sin brazo",
            "HorariosPresentacion":"7:00 AM,,1:00 PM,5:00 PM"                    
        },
        {
            "Img":"imagenes/navidad2.jpg",
            "TituloPelicula":"Las cronicas de navidad 2",
            "DuracionPelicula":"1h 55m",
            "Clasificion":"Infantil",
            "TipoButacas": "Asiento VIP, Asiento normal, con brazo, Sin brazo",
            "HorariosPresentacion":"7:00 AM,,1:00 PM,5:00 PM"
        },
        {
            "Img":"imagenes/enredados.jpg",
            "TituloPelicula":"Enredados",
            "DuracionPelicula":"1h 40m",
            "Clasificion":"Infantil",
            "TipoButacas": "Asiento VIP, Asiento normal, con brazo, Sin brazo",
            "HorariosPresentacion":"7:00 AM,,1:00 PM,5:00 PM"
        },
        {
            "Img":"imagenes/niños2.jpg",
            "TituloPelicula":"Son como niños 2",
            "DuracionPelicula":"1h 41m",
            "Clasificion":"+16",
            "TipoButacas": "Asiento VIP, Asiento normal, con brazo, Sin brazo",
            "HorariosPresentacion":"7:00 AM,,1:00 PM,5:00 PM"
        }
    ]
};

var div=document.getElementById("peliculas");
div.innerHTML=mostrar(peliculas.movie);


function mostrar(datos){
   
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){
    data+="<br>"
    data += "<li class=\"box\">\n";
    data += "<div class=\"box-shadow\"></div>\n";
    data += "<div class=\"box-gradient\">\n";
    data += "<img src=\"" + datos[i].Img + "\" alt=\"Avatar de " +
   datos[i].TituloPelicula + " " + datos[i].DuracionPelicula + "\" class=\"float-left\" />\n";
    data +="<div class=\"float-right\">";
    data += "<h4>\nTitulo de la pelicula: " + datos[i].TituloPelicula + "\n</h4>\n";
    data += "<p><b>\nDuracion de pelicula: </b>" + datos[i].DuracionPelicula + "\n<br />\n";
    data += "<b>Clasificacion:</b> <br> " + datos[i].Clasificion + "\n</p>\n";
    data += "<b>Tipo de butaca: <br></b>" + datos[i].TipoButacas + "\n</p>\n";
    data += "<b>Horarios de presentacion:</b> " + datos[i].HorariosPresentacion+ "\n</p>\n";
    data +="</div>\n";
    data += "</div>\n";
    data += "</li>\n";
    }
    data += "</ul>\n";
    return data;
}


