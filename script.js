function preload() {}
function setup() {
    canvas = createCanvas(700, 700);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 100, 100, 400, 300);
    //circle(0, 0, 30);
    //circle(640, 480, 30);
    //circle(640, 0, 30);
    //circle(0, 480, 30);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 430, 80);
    circle(590, 430, 80);
    fill(0, 120, 0);
    stroke(0, 120, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
}
function take_snapshot() {
    save("selfie.jpg");
}