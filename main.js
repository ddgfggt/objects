img="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
objectDetector.detect(img,gotResults);
document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function draw(){
image(img,0,0,640,420);
noFill();
stroke("red");
text("dog",45,75);
rect(30,60,450,350);
noFill();
stroke("red");
text("cat",45,75);
rect(30,60,450,350);
}
function modelloaded(){
    console.log("model is loaded");
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
    }
}