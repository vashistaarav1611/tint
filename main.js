function preload(){
	
}
function setup(){
	canvas = createCanvas(640,480);
	canvas.position(110,260)
	video = createCapture(VIDEO);
	video.hide();
	tintcolor = "";
}
function draw(){
	image(video, 0, 0, 640, 480);
	tint(tintcolor);
}
function take_snapshot(){
	save("snapshot.png");
}
function tint_change(){
	tintcolor = document.getElementById("color").value;
	console.log(tintcolor);
}