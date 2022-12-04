var elforum = document.querySelector(".js-form");
var elinput = document.querySelector(".input");
var elp1 = document.querySelector(".js-p1");
var elp2 = document.querySelector(".js-p2");
var elp3 = document.querySelector(".js-p3");
var elp4 = document.querySelector(".js-p4");
var elEror = document.querySelector(".eror")




function onFoot(km) {
    var speed = 3.6;
    return Math.floor(km / speed) + ' soat ' + ((km % speed) / (speed / 60).toFixed(2)).toFixed(0) + " minut"
}
function byBike(km) {
    var speed = 20.1;
    return Math.floor(km / speed) + ' soat ' + ((km % speed) / (speed / 60).toFixed(3)).toFixed(0) + " minut"
}
function byCar(km) {
    var speed = 70;
    return Math.floor(km / speed) + ' soat ' + ((km % speed) / (speed / 60).toFixed(2)).toFixed(0) + " minut"
}
function byPlain(km) {
    var speed = 800;
    return Math.floor(km / speed) + ' soat ' + ((km % speed) / (speed / 60).toFixed(2)).toFixed(0) + " minut"
}



elforum.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (isNaN(Number(elinput.value)) != true) {
        if (elinput.value < 0) {
            elEror.textContent = "Musbat son kiriting"
        } else {
            elp1.textContent = onFoot(elinput.value);
            elp2.textContent = byBike(elinput.value);
            elp3.textContent = byCar(elinput.value);
            elp4.textContent = byPlain(elinput.value)
        }
    } else {
        elEror.textContent = "Son kiriting"
    }


});