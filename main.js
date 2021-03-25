var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_image = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({ top: player_y, left: player_x });
        canvas.add(player_image);
    });
}


function block_update(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image = Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({ top: player_y, left: player_x });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (e.shiftKey == true && key_pressed == "80") {
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && key_pressed == "77") {
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (key_pressed == "70") {
        block_update("ironman_face.png");
         console.log("f");
     }

     if (key_pressed == "66") {
        block_update("spiderman_body.png");
         console.log("b");
     }

     if (key_pressed == "76") {
        block_update("hulk_legs.png");
         console.log("f");
     }

     if (key_pressed == "82") {
        block_update("thor_right_hand.png");
         console.log("r");
     }

     if (key_pressed == "72") {
        block_update("captain_america_left_hand.png");
         console.log("l");
     }
     }

