
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cookie, cookieImg
var score = 0
let clickPower = 1;
var cookieupgrade,cookieupImg



function preload() {
	cookieImg = loadImage("goodcookie.png")
	cookieupImg = loadImage("Upgrade.PNG")
}

function setup() {
	background(255, 255, 255);
	background("Gray");

	cookie = createSprite(200, 200, 100, 100)
	cookie.addImage(cookieImg)
	cookie.scale = 0.2

	cookieupgrade = createSprite(90, 350, 100, 100)
	cookieupgrade.addImage(cookieupImg)
	cookieupgrade.scale = 0.3

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(200)

	textSize(20);
	textAlign(CENTER);
	text(`Cookies: ${score}`, width / 2, 30);
	text("press P, While Mouse is hovering over the Cookie", 255, 80);
	text(`Click Power: ${clickPower}`, width / 2, 60);
	text(`Unlock CookieUpgrade at every 3 cookies`, width / 2, 120);




	drawSprites();

}



function keyPressed() {
	// Pressing 'P' key increases click power
	if (key === 'p' || key === 'P') {
		clickPower++;
	}

	if (cookie.overlapPoint(mouseX, mouseY)) {

		cookie.scale += 0.005

		clickPower ++;


		if (clickPower % 5 === 0) {
			score +=1
			

			
		}

		





	}


}




