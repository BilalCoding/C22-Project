const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImage;
var playerImage;

function preload() {
  backgroundImg = loadImage("background.png");
  baseImage = loadImage("base.png");
  playerImage = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body

  var options = {
    isStatic: true,
  }

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world, player);

  angle = 90;
  playerArcher = new Archer(290, playerBase.position.y - 10, 50, 180, angle);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function

  //show the playerbase image using image() function
  image(baseImage, playerBase.position.x, playerBase.position.y, 180, 150)
  image(playerImage, player.position.x, player.position.y, 50, 180);

  Engine.update(engine);

  playerArcher.show();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
