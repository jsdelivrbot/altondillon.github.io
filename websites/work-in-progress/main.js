var player;

function setup() {
    createCanvas(450, 450);
    background(125, 180, 225);
    player = createSprite(width/2, height/2, 50, 50);
}
function draw() {
    background(125, 180, 225);
    if (keyDown("W")) {
        moveDirY(-2);
    }
    if (keyDown("A")) {
        moveDirX(-2);
    }
    if (keyDown("S")) {
        moveDirY(2);
    }
    if (keyDown("D")) {
        moveDirX(2);
    }
    drawSprites();
}
function moveDirY(int dir) {
    player.position.y = dir;
}
function moveDirX(int dir) {
    player.position.x = dir;
}
