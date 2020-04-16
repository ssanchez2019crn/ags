document.getElementById("blau").addEventListener("click", temaBlau)
document.getElementById("neutre").addEventListener("click", temaNeutre)
document.getElementById("default").addEventListener("click", temaNeutre)
document.getElementById("verd").addEventListener("click", temaVerd)
document.getElementById("marro").addEventListener("click", temaMarro)
document.getElementById("morado").addEventListener("click", temaMorado)
document.getElementById("rosa").addEventListener("click", temaRosa)
document.getElementById("noche").addEventListener("click", temaNit)
document.getElementById("default").addEventListener("click", temaNeutre)
document.getElementById("seagreen").addEventListener("click", temaSeaGreen)
document.getElementById("morado2").addEventListener("click", temaMorado)
document.getElementById("rosa2").addEventListener("click", temaRosa)
document.getElementById("noche2").addEventListener("click", temaNit)
document.getElementById("default2").addEventListener("click", temaNeutre)
document.getElementById("seagreen2").addEventListener("click", temaSeaGreen)
document.getElementById("morado3").addEventListener("click", temaMorado)
document.getElementById("rosa3").addEventListener("click", temaRosa)
document.getElementById("noche3").addEventListener("click", temaNit)
document.getElementById("rainbow").addEventListener("input", temaRainbow)
document.getElementById("rainbowBocatas").addEventListener("input", temaRainbow)
document.getElementById("rainbowHeader").addEventListener("input", temaRainbow)

var rainbow = document.getElementById("rainbow")
var rainbowBocatas = document.getElementById("rainbowBocatas")
var rainbowHeader = document.getElementById("rainbowHeader")


// alert("Recomano veure en Galaxy S5 o bé en pantalla normal. ")

function temaBlau() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("options")[0].style.display = "none"
        document.getElementsByClassName("lletres")[i].style.color = "black";
        document.getElementsByClassName("coloru")[i].style.background = "springgreen";
        document.getElementById("principal").style.background = ("skyblue")
        document.getElementById("circb").style.background = "forestgreen";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }

}
function temaNeutre() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("options")[0].style.display = "flex"
        document.getElementsByClassName("coloru")[i].style.background = "lightcyan";
        document.getElementsByClassName("lletres")[i].style.color = "black";
        document.getElementById("header").style.background = "cadetblue";
        document.getElementById("principal").style.background = ("lightblue")
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }
}
function temaVerd() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("options")[0].style.display = "none"
        document.getElementsByClassName("lletres")[i].style.color = "black";
        document.getElementsByClassName("coloru")[i].style.background = "paleturquoise";
        document.getElementById("principal").style.background = ("palegreen")
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "turquoise";
    }
}
function temaMarro() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("options")[0].style.display = "none"
        document.getElementsByClassName("coloru")[i].style.background = "tomato";
        document.getElementsByClassName("lletres")[i].style.color = "white";
        document.getElementById("principal").style.background = ("wheat");
        document.getElementById("header").style.background = "firebrick";
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "firebrick";
        document.getElementById("circv").style.background = "palegreen";
    }
}

function temaRosa() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("lletres")[i].style.color = "white";
        document.getElementsByClassName("coloru")[i].style.background = "lightpink";
        document.getElementById("principal").style.background = ("lavenderblush");
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }
}

function temaMorado() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("lletres")[i].style.color = "#111";
        document.getElementsByClassName("coloru")[i].style.background = "oldlace";
        document.getElementById("principal").style.background = ("mistyrose");
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }
}
function temaNit() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("lletres")[i].style.color = "yellow";
        document.getElementsByClassName("coloru")[i].style.background = "darkslateblue";
        document.getElementById("principal").style.background = ("mediumpurple");
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }
}

function temaSeaGreen() {
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName("lletres")[i].style.color = "darkslategrey";
        document.getElementsByClassName("coloru")[i].style.background = "lightseagreen";
        document.getElementById("principal").style.background = ("darkseagreen");
        document.getElementById("circb").style.background = "skyblue";
        document.getElementById("circm").style.background = "wheat";
        document.getElementById("circv").style.background = "palegreen";
    }
}
function temaRainbow() {
    document.getElementById("principal").style.background = rainbow.value;
    document.getElementById("principal").style.background = rainbow.value;
    document.getElementById("bocata").style.background = rainbowBocatas.value;
    document.getElementById("bocata-d").style.background = rainbowBocatas.value;
    document.getElementById("header").style.background = rainbowHeader.value;
}

