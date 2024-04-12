status="";

function setup(){
canvas=createCanvas(480,380);
canvas.center();

}

function preload(){
  video=createVideo();
  video.size(480,380);
  video.hide();
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("input").value;
}

function modelLoaded(){
console.log(modelLoaded);
status=true;
}

function draw(){
image(video,0,0,480,380);
}