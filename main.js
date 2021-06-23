

canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");

// we are declaring a array and updating the canvas img
nasa_img_array = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
random_number = Math.floor(Math.random() * 4);

rover_width = 100;
rover_height = 90;
background_image = "racing.jpeg";
rover_image = "car.img1.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up");
    }
    if(keyPressed == '40') {
        down();
        console.log("down");
    }
    if(keyPressed == '37') {
        left();
        console.log("left");
    }
    if(keyPressed == '39') {
        right();
        console.log("right");
    }
}

// now we are making the up key function so we can make the rover move up
function up() {

    if(rover_y >=0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

// now we are making the down key function so we can make the rover move down
function down() {

    if(rover_y <=500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

// now we are making the left key function so we can make the rover move left
function left() {

    if(rover_x >=0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

// now we are making the right key function so we can make the rover move right
function right() {

    if(rover_x <=700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}


