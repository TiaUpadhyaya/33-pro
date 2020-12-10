const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,d1,d2,d3,d4,d5,d6,d7;
var participle;
var turn=0;
var particles = [];
var plinkos= [];
var divisions = [];
var score=0;
var gameState;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  text ("score:"+score,50,50)
  text ("500",34,385);
  text ("500",113,385);
  text ("300",189,385);
  text ("300",261,385);
  text ("100",335,385);
  ground = new Ground(240,780,480,20);
  d1 = new Divisions(7.5,600,15,400);
  d2 = new Divisions(75.5,600,15,400);
  d3 = new Divisions(151,600,15,400);
  d4 = new Divisions(228.5,600,15,400);
  d5 = new Divisions(295,600,15,400);
  d6 = new Divisions(375.5,600,15,400);
  d7 = new Divisions(480,600,15,400);
  
 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinko(j,75,10));
 }
 for (var j = 15; j <=width-10; j=j+50)
 {
   plinkos.push(new Plinko(j,155,10));
 }
 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinko(j,235,10));
 } 
   for(var j =15; j <=width-10; j=j+50)
{
     plinkos.push(new Plinko(j,315,10));
}
 

}
function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     } if(frameCount%60===0){
        particles.push(new Particles(random(width/2-30, width/2+30), 10,10)); score++; 
      } 
        for (var j = 0; j < particles.length; j++) { 
          particles[j].display(); 
        } 
        for (var k = 0; k < divisions.length; k++) { 
          divisions[k].display(); 
        }
if(particles!==null)
  {
    particles.display();

  if (particle.body.position.y<600){
     if (particles.body.position.x<151){
       score=score+500;
       particles=null;
     }
     if (particles.body.position.x>151 && particles.x<295){
      score=score+300;
      particles=null;
    }
    if (particles.body.position.x>295){
      score=score+100;
      particles=null;
    }
  }
}
if (count>=5) gameState="end";
  drawSprites();
}
function mousePressed()
{
  if(gameState!=="end")
  {
    turn++;
    participle=new Particle(mouseX,10,10,10);
    text.display("Game Over",240,400);
  }
}