var hours, mins, secs;

function setup(){
createCanvas(400,400);
angleMode(DEGREES)
}


function draw(){
  background(0);

  translate(200,200)
  rotate(-90)

  hours = hour();

  mins = minute();
 
  secs = second();
  
 
  scAngle = map(secs, 0 ,60 ,0,360)
  minAngle= map(mins, 0,60,0,360)
  hrAngle = map(hours % 12, 0,12,0,360)
  

  push()
  rotate(scAngle)
  strokeWeight(5)
  stroke("red")
  line(0,0,100,0)
  pop ()

  push()
  rotate(minAngle)
  strokeWeight(6)
  stroke("green")
  line(0,0,80,0)
  pop ()

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  fill("yellow")
  ellipse(0,0,10,10)

  
   strokeWeight(10);
   noFill();
   
   stroke("red");
   arc(0,0,300,300,0,scAngle);
   
   stroke("green");
   arc(0,0,280,280,0,minAngle);
 
   stroke("blue");
   arc(0,0,260,260,0,hrAngle);

   push()
   rotate(90)
   stroke(0,255,0)
   strokeWeight(1)
   textSize(14)
   text("1", 50,-80)
   text("2", 90,-45)
   
   text("3", 100,0)
   text("4", 90,45)
   text("5", 50,80)

   text("6", 0,100)
   text("7", -50,80)
   text("8", -90,45)
   text("9", -100,0)
   text("10", -90,-45)
   text("11", -50,-80)
   text("12", 0,-100)
   pop()
 
}