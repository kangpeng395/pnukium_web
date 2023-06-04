let button1, button2, button3;
function setup() {
  createCanvas(400, 400);
  background(220);
  
  button1=createButton('청');
  button1.position(300,150)
  button1.size(100,50);
  button1.style('font-size','35px');
  button1.style('color','blue');

  button2=createButton('적');
  button2.position(0,0)
  button2.size(100,50);
  button2.style('font-size','35px');
  button2.style('color','red');
  
  button3=createButton('녹');
  button3.position(0,150)
  button3.size(100,50);
  button3.style('font-size','35px');
  button3.style('color','green');
  
  button4=createButton('황');
  button4.position(300,0)
  button4.size(100,50);
  button4.style('font-size','35px');
  button4.style('color','yellow');
  
  button5=createButton('보라');
  button5.position(0,350)
  button5.size(100,50);
  button5.style('font-size','35px');
  button5.style('color','purple');
  
  button6=createButton('회');
  button6.position(300,350)
  button6.size(100,50);
  button6.style('font-size','35px');
  button6.style('color','gray');
  
  button7=createButton('주황');
  button7.position(150,0)
  button7.size(100,50);
  button7.style('font-size','35px');
  button7.style('color','orange');
  
  button8=createButton('갈');
  button8.position(150,350)
  button8.size(100,50);
  button8.style('font-size','35px');
  button8.style('color','brown');
}
                      
function blueB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(0,0,255-30*i);
    rect(70,70,100,100);
  }
}

function redB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(255-30*i,0,0);
    rect(70,70,100,100);
  }
}

function greenB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(0,255-30*i,0);
    rect(70,70,100,100);
  }
}

function yellowB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(255-30*i,255-30*i,40);
    rect(70,70,100,100);
  }
}

function purpleB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(200-20*i,0,200-20*i);
    rect(70,70,100,100);
  }
}

function grayB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(255-30*i,255-30*i,255-30*i);
    rect(70,70,100,100);
  }
}

function orangeB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(255-30*i,150-30*i,0);
    rect(70,70,100,100);
  }
}

function brownB(){
  background(220);
  for (i=1; i<6; i++) {
    translate(30,30)
    fill(165-15*i,42-15*i,42-15*i);
    rect(70,70,100,100);
  }

}

function draw() {
  button1.mousePressed(blueB);
  button2.mousePressed(redB);
  button3.mousePressed(greenB);
  button4.mousePressed(yellowB);
  button5.mousePressed(purpleB);
  button6.mousePressed(grayB);
  button7.mousePressed(orangeB);
  button8.mousePressed(brownB);
}