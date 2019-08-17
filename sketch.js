let x;
let y;
let balls = [];
let canvas;
let button ;
let bgcol ;
let h1;

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
function setup(){
	canvas = createCanvas(windowWidth , windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", -1)
	bgcol = color(0, 119, 190);
  	button = select('#go');
 	button.mousePressed(changecol);
	h1 = select('h1');
    if (windowWidth < 400){
  		h1.style('font-size', '200%');
    }

}
function changecol(){
	bgcol = color(random(255), random(255), random(255));
}

function mousePressed(){
	let ball = new Ball(x, y);
	balls.push(ball);
}
function draw(){
	x = mouseX ; 
	y = mouseY ;
	
	background(bgcol);
	for (let i = 0 ; i < balls.length ; i++ ){
		balls[i].show();
		balls[i].update();
		balls[i].tailshow();
	}
}


class Ball{
	constructor(x, y){
	this.x = x ;
	this.y = y ;
	this.tail = [];
}

	update(){
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
		

	}
	show(){
		noStroke();
		fill(100);
		ellipse( this.x, this.y, 20, 20);
	}
	tailshow(){
		let v = createVector(this.x, this.y);
		this.tail.push(v);
		if (this.tail.length > 100){
			this.tail.splice(0, 1);
		} 
		noFill();
		stroke(50);
		beginShape();
		for(let i = 0 ; i < this.tail.length ; i++){
			let posx = this.tail[i].x ;
			let posy = this.tail[i].y ; 
			vertex(posx, posy);
			endShape();
		}

	}
	

}	