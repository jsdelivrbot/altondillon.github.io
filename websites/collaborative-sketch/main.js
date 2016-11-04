// Initialize Firebase
var config = {
    apiKey: "AIzaSyDHn6VDCRIemcFbRhK6webjUNnryaBXO1o",
    authDomain: "collaborative-sketch-38d54.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-38d54.firebaseio.com",
    storageBucket: "collaborative-sketch-38d54.appspot.com",
    messagingSenderId: "285807134297"
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];

function setup() {
    var canvas = createCanvas(400, 400);
    background(255);
    fill(0);

    pointsData.on("child_added", function (point) {
        points.push(point.val());
    })

    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPoint);
}
function draw() {
    background(255);

    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}
function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY});
}
function drawPointIfMousePressed() {
    if(mouseIsPressed) {
        drawPoint();
    }
}
