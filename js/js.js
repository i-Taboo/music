function cambiolista1() {
    var reproductor = document.getElementById("reproductor");
    reproductor.setAttribute("src","audio/lost in paradise lofi.mp3");
}

function cambiolista2() {
    var reproductor = document.getElementById("reproductor");
    reproductor.setAttribute("src","audio/lost in paradise.mp3");
}

function cambiolista3() {
    var reproductor = document.getElementById("reproductor");
    reproductor.setAttribute("src","audio/shiloh.mp3");
}

function cambiolista4() {
    var reproductor = document.getElementById("reproductor");
    reproductor.setAttribute("src","audio/fukashigi no krate.mp3");
}

function bucle(e) {
    var reproductor = document.getElementById("reproductor");
    var bucleicon = document.getElementById("bucle");
    if (reproductor.hasAttribute("loop","true")) {
        reproductor.removeAttribute("loop","true")
        bucleicon.removeAttribute("src","img/icons/bx-equalizer.svg")
        bucleicon.setAttribute("src","img/icons/repeat-regular-24.png")
    }else{
        document.getElementById("reproductor").setAttribute("loop","true")
        bucleicon.removeAttribute("src","img/icons/repeat-regular-24.png")
        bucleicon.setAttribute("src","img/icons/bx-equalizer.svg")
    }
}

function cambiofondo() {
    var awa = document.getElementById("awa");
    var mujer = document.getElementById("img");
    var gojo = document.getElementById("img2");

    if (document.body.classList.contains("el2")) {
        document.body.classList.remove("el2")
        gojo.classList.add("oculto")
        mujer.classList.remove("oculto")
    }else{
    document.body.classList.add("el2")
    mujer.classList.add("oculto")
    gojo.classList.remove("oculto")
}
}

function quitacontrol() {
    var removedor = document.getElementById("remvcontrol");
    var reproductor = document.getElementById("reproductor");   

    if (reproductor.hasAttribute("controls")) {
        reproductor.removeAttribute("controls");
        removedor.removeAttribute("src","img/icons/bx-message-alt-x.svg");
         removedor.setAttribute("src","img/icons/bxs-comment-x.svg");
    }else{
        reproductor.setAttribute("controls", "true");
        removedor.removeAttribute("src","img/icons/bxs-comment-x.svg");
        removedor.setAttribute("src","img/icons/bx-message-alt-x.svg");
    }
}
