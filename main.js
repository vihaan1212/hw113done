function preload() {
    
}
function setup(){
    canvas=createCanvas(640,480);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video,230,150,220,200);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,70);
circle(550,50,70);
circle(50,430,70);
circle(550,430,70);
fill(0,255,0);
stroke(0,255,0);
rect(80,40,442,20);
rect(80,420,435,20);
rect(40,84,20,325);
rect(550,84,20,325)
}
function takeSnapshot(){
    save('practice.png')
}