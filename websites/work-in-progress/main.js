var player;

function setup() {
    createCanvas(450, 450);
    background(125, 180, 225);
    player = createSprite(0, 0, 50, 50);
    player.velocity.x = 2;
}
function draw() {
    if (keyDown("W")) {
        player.position.y -= 5;
    }
    if (keyDown("A")) {
        player.position.x -= 5;
    }
    if (keyDown("S")) {
        player.position.y += 5;
    }
    if (keyDown("D")) {
        player.position.x += 5;
    }
    drawSprites();
}


