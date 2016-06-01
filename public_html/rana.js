
//<canvas id="canvas" width="300" height="300" style="background-color: #999">
window.addEventListener('load', init, false);
var canvas = null, ctx = null;
var pressing = [];
var puntus = [5];
puntus[0] = 0;
puntus[1] = 0;
puntus[2] = 0;
puntus[3] = 0;
puntus[4] = 0;
puntus[5] = 0;
var puntu;
var p = 0;
var score = 0;
var pause = true;
var gameOver = false;
var carretera = new Rectangle(0, 0, 300, 300);
var rana = new Rectangle(145, 290, 10, 10);
var final = new Rectangle(40, 0, 300, 10);
var ventanaPause = new Rectangle(75, 75, 150, 150);
// Fila 5
var camion = new Rectangle(300, 22, 33, 12);
// Fila 4
var cocheGris4 = new Rectangle(0, 55, 25, 10);
var cocheRojo4 = new Rectangle(30, 55, 25, 10);
var cocheRosa4 = new Rectangle(300, 75, 15, 10);
// Fila 3
var cocheGris3 = new Rectangle(0, 110, 25, 10);
var cocheRojo3 = new Rectangle(30, 110, 25, 10);
var cocheRosa3 = new Rectangle(300, 130, 15, 10);
// Fila 2
var cocheGris2 = new Rectangle(0, 170, 25, 10);
var cocheRojo2 = new Rectangle(30, 170, 25, 10);
var cocheRosa2 = new Rectangle(300, 190, 15, 10);
// Fila 1
var cocheGris = new Rectangle(0, 250, 25, 10);
var cocheRojo = new Rectangle(30, 250, 25, 10);
var cocheRosa = new Rectangle(300, 230, 15, 10);

//Imagenes
var iCarretera = new Image();
iCarretera.src = "media/carretera.png";
var iRana = new Image();
iRana.src = 'media/rana.png';
var iCocheGris = new Image();
iCocheGris.src = 'media/cocheGris.png';
var iCocheRojo = new Image();
iCocheRojo.src = 'media/cocheRojo.png';
var iCocheRosa = new Image();
iCocheRosa.src = 'media/cocheRosa.png';
var iCamion = new Image();
iCamion.src = 'media/camion.png';

//teclas jugador
var KEY_ENTER = 13;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
    repaint();
}

function run() {
    setTimeout(run, 20);
    act();
}
function repaint() {
    requestAnimationFrame(repaint);
    paint(ctx);
}

function act() {
    if (!pause) {
        //coches fila 5
        camion.x -= 5;
        if (camion.x <= 0)
            camion.x = canvas.width;
        //coches Fila 4
        cocheRojo4.x += 4;
        if (cocheRojo4.x > canvas.width)
            cocheRojo4.x = 0;

        cocheGris4.x += 2;
        if (cocheGris4.x > canvas.width)
            cocheGris4.x = 0;

        cocheRosa4.x -= 3.2;
        if (cocheRosa4.x <= 0)
            cocheRosa4.x = canvas.width;
        //coches Fila 3
        cocheRojo3.x += 2;
        if (cocheRojo3.x > canvas.width)
            cocheRojo3.x = 0;

        cocheGris3.x += 1.7;
        if (cocheGris3.x > canvas.width)
            cocheGris3.x = 0;

        cocheRosa3.x -= 4;
        if (cocheRosa3.x <= 0)
            cocheRosa3.x = canvas.width;
        //coches Fila 2
        cocheRojo2.x += 2;
        if (cocheRojo2.x > canvas.width)
            cocheRojo2.x = 0;

        cocheGris2.x += 3;
        if (cocheGris2.x > canvas.width)
            cocheGris2.x = 0;

        cocheRosa2.x -= 3;
        if (cocheRosa2.x <= 0)
            cocheRosa2.x = canvas.width;
        //coches Fila 1
        cocheRojo.x += 2;
        if (cocheRojo.x > canvas.width)
            cocheRojo.x = 0;

        cocheGris.x += 1;
        if (cocheGris.x > canvas.width)
            cocheGris.x = 0;

        cocheRosa.x -= 2;
        if (cocheRosa.x <= 0)
            cocheRosa.x = canvas.width;

        //Control Rana
        if (pressing[KEY_UP])
            rana.y -= 2;
        if (pressing[KEY_RIGHT])
            rana.x += 2;
        if (pressing[KEY_DOWN])
            rana.y += 2;
        if (pressing[KEY_LEFT])
            rana.x -= 2;
        // Bucle Rana
        if (rana.x > canvas.width - 10)
            rana.x = canvas.width - 10;
        if (rana.x < 0)
            rana.x = 0;
        if (rana.y > canvas.height - 10)
            rana.y = canvas.height - 10;
        if (rana.y < 0)
            rana.y = 0;
        // Colision Rana fila 5
        if (rana.intersects(camion)) {
            muerte();
        }
        // Colision Rana fila 4
        if (rana.intersects(cocheGris4)) {
            muerte();
        }
        if (rana.intersects(cocheRojo4)) {
            muerte();
        }
        if (rana.intersects(cocheRosa4)) {
            muerte();
        }
        // Colision Rana fila 3
        if (rana.intersects(cocheGris3)) {
            muerte();
        }
        if (rana.intersects(cocheRojo3)) {
            muerte();
        }
        if (rana.intersects(cocheRosa3)) {
            muerte();
        }
        // Colision Rana fila 2
        if (rana.intersects(cocheGris2)) {
            muerte();
        }
        if (rana.intersects(cocheRojo2)) {
            muerte();
        }
        if (rana.intersects(cocheRosa2)) {
            muerte();
        }

        // Colision Rana fila 1
        if (rana.intersects(cocheGris)) {
            muerte();
        }
        if (rana.intersects(cocheRojo)) {
            muerte();
        }
        if (rana.intersects(cocheRosa)) {
            muerte();
        }

        //Colision Final
        if (rana.intersects(final)) {
            score++;
            finalGame();
        }
    }
    if (pressing[KEY_ENTER]) {
        pause = !pause;
        gameOver = false;
        presing = null;
    }
}
function finalGame() {
    rana.x = 145;
    rana.y = 290;
}

function muerte() {
    rana.x = 145;
    rana.y = 290;
    gameOver = true;
    pause = true;
    score = 0;


}
/*
 function puntuacion() {
 for (i = 0; i = puntus.length; i++) {
 if (score > puntus[i]) {
 puntus[i] = score;
 }
 }
 }
 function escribirPuntu0() {
 document.getElementById("0").innerHTML = puntus[0];
 }
 function escribirPuntu1() {
 document.getElementById("1").innerHTML = puntus[1];
 }
 function escribirPuntu2() {
 document.getElementById("2").innerHTML = puntus[2];
 }
 function escribirPuntu3() {
 document.getElementById("3").innerHTML = puntus[3];
 }
 function escribirPuntu4() {
 document.getElementById("4").innerHTML = puntus[4];
 }
 function escribirPuntu5() {
 document.getElementById("5").innerHTML = puntus[5];
 }
 */



function paint(ctx) {

    //Carretera
    ctx.drawImage(iCarretera, carretera.x, carretera.y);

    //Score
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText("Score:" + score, 0, 10);
    //Mi Rana
    ctx.drawImage(iRana, rana.x, rana.y);
    //final
    ctx.fillStyle = "#F7BFBE";
    final.fill(ctx);
    //COCHES
    // //fila 5
    ctx.drawImage(iCamion, camion.x, camion.y);
    // //fila 4
    ctx.drawImage(iCocheGris, cocheGris4.x, cocheGris4.y);
    ctx.drawImage(iCocheRosa, cocheRosa4.x, cocheRosa4.y);
    ctx.drawImage(iCocheRojo, cocheRojo4.x, cocheRojo4.y);
    // //fila 3
    ctx.drawImage(iCocheGris, cocheGris3.x, cocheGris3.y);
    ctx.drawImage(iCocheRosa, cocheRosa3.x, cocheRosa3.y);
    ctx.drawImage(iCocheRojo, cocheRojo3.x, cocheRojo3.y);
    // //fila 2
    ctx.drawImage(iCocheGris, cocheGris2.x, cocheGris2.y);
    ctx.drawImage(iCocheRosa, cocheRosa2.x, cocheRosa2.y);
    ctx.drawImage(iCocheRojo, cocheRojo2.x, cocheRojo2.y);
    //fila 1
    ctx.drawImage(iCocheGris, cocheGris.x, cocheGris.y);
    ctx.drawImage(iCocheRosa, cocheRosa.x, cocheRosa.y);
    ctx.drawImage(iCocheRojo, cocheRojo.x, cocheRojo.y);



    if (gameOver) {
        ctx.fillStyle = "#00FF00";
        ventanaPause.fill(ctx);
        ctx.fillStyle = "#000000";
        ctx.fillText("GAME OVER", 120, 100);
        ctx.fillText("Puntuacion Maxima: " + score, 95, 140);
        ctx.fillText("Pulsa Enter para Jugar", 95, 160);

    }


}

document.addEventListener('keydown', function(evt) {
    lastPress = evt.keyCode;
    pressing[evt.keyCode] = true;
}, false);

document.addEventListener('keyup', function(evt) {
    pressing[evt.keyCode] = false;
}, false);

window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 17);
            };
})();

function Rectangle(x, y, width, height) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;

    this.intersects = function(rect) {
        if (rect != null) {
            return(this.x < rect.x + rect.width &&
                    this.x + this.width > rect.x &&
                    this.y < rect.y + rect.height &&
                    this.y + this.height > rect.y);
        }
    }

    this.fill = function(ctx) {
        if (ctx != null) {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}