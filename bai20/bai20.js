var img = document.getElementById("rose");
var effects = {


    gray: function () {
        img.style.filter = "grayscale(1)"; img.style.transform = "";
        img.style.opacity = "";
    },

    xray: function () {
        img.style.filter = "grayscale(1) invert(1)"; img.style.transform = "";
        img.style.opacity = "";
    },

    invert: function () {
        img.style.filter = "invert(1)"; img.style.transform = "";
        img.style.opacity = "";
    },

    fliph: function () {
        img.style.filter = ""; img.style.transform = "scaleX(-1)";
        img.style.opacity = "";
    },

    flipv: function () {
        img.style.filter = ""; img.style.transform = "scaleY(-1)";
        img.style.opacity = "";
    },

    glow: function () {
        img.style.filter = "drop-shadow(0 0 12px gold)"; img.style.transform = "";
        img.style.opacity = "";
    },

    shadow: function () {
        img.style.filter = "drop-shadow(5px 5px 8px rgba(0,0,0,0.8))";
        img.style.transform = ""; img.style.opacity = "";
    },

    boldshadow: function () {
        img.style.filter = "drop-shadow(8px 8px 2px #000)";
        img.style.transform = ""; img.style.opacity = "";
    },

    dropshadow: function () {
        img.style.filter = "drop-shadow(6px 6px 12px rgba(255,255,255,0.5))";
        img.style.transform = ""; img.style.opacity = "";
    },

    blur: function () {
        img.style.filter = "blur(3px)"; img.style.transform = "";
        img.style.opacity = "";
    },

    wave: function () {
        img.style.filter = "url(#wave)"; img.style.transform = "";
        img.style.opacity = "";
    },

    mask: function () { img.style.filter = ""; img.style.transform = ""; img.style.opacity = "0.4"; },
    alpha: function () {
        img.style.filter = "opacity(0.4)"; img.style.transform = "";
        img.style.opacity = "";
    }
};


function applyEffect(btn, name) {
    var allBtns = document.querySelectorAll("button");
    for (var i = 0; i < allBtns.length; i++) {
        allBtns[i].classList.remove("active");
    }
    btn.classList.add("active");
    effects[name]();
}