var player;
var enemy;
var isGameOver;

function setup() {
    isGameOver = false;
    createCanvas(250, 250);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30);
}
function draw() {

    background(0, 0, 100);

    if(isGameOver) {
        gameOver();
    } else {
        if (enemy.overlap(player)) {
        isGameOver = true;
        }
    }

    if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
        player.position.x += 1;
    }
    if (keyDown(LEFT_ARROW) && player.position.x > 25) {
        player.position.x -= 1;
    }

    enemy.position.y = enemy.position.y + 3;

    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5);
    }

    drawSprites();

}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3 * height/4);
}
