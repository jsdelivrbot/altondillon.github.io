var player;

function setup() {
    createCanvas(450, 450);
    background(125, 180, 225);
    player = createSprite(width/2, height/2, 50, 50);
}
function draw() {
    background(125, 180, 225);
    if (keyPressed = "W") {
        player.position.y -= 2;
    }
    drawSprites();
}

