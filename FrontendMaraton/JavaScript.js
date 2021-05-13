function hover(element) {
    element.setAttribute('src', '../../Resimler/1.png');
}

function unhover(element) {
    element.setAttribute('src', '../../Resimler/2.png');
}
function hover2(element) {
    element.setAttribute('src', '../../Resimler/2.png');
}

function unhover2(element) {
    element.setAttribute('src', '../../Resimler/3.png');
}

var buton = document.getElementById('yakalanacakNesne');
buton.onmouseover = function () {
    var xPos = parseInt(Math.random() * innerWidth/2);
    var yPos = parseInt(Math.random() * innerHeight/2);
   
    buton.style.left = xPos + "px";
    buton.style.top = yPos + "px";

}

buton.onclick = function () {
    alert("Tebrikler Kazandın! Ücretsiz giriş için kodunuz:SA9396");
}

function freeTicketInformation() {
    setTimeout(function () {
        alert("Hoşgeldin! Cluba bedava giriş hakkı kazanmak istersen sol üstte bulunan mavi topu yakala! ");
    }, 1000);
}
