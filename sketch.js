var LeBronImage, StephImage
var Basketball
var player1, player2
var ground
var hoop1, hoop2
var ball
var background, crowd, bubble, scoreboard
var x = false

function preload(){
LeBronImage = loadImage("assets/LeBron.png ")
StephImage = loadImage("assets/curry.png")
BasketballImage = loadImage("assets/Basketball.png")
Hoop1 = loadImage("assets/hoop1.png")
Hoop2 = loadImage("assets/hoop2.png")
Background = loadImage("assets/Background.png")
Bubble = loadImage('assets/bubble.png')
Crowd = loadImage('assets/Crowd.jpeg')
Scoreboard = loadImage('assets/Scoreboard.webp')
}

function setup(){
createCanvas(1920,1000)

backwall = createSprite(954,450,1840,30)
backwall.shapeColor = 'black'

bubble = createSprite(990,678,30,30)
bubble.addImage(Bubble)
bubble.scale = 3.4

ground = createSprite(1000,900,2000,30)
ground.shapeColor='black'

crowd = createSprite(320,210,100,100)
crowd.addImage(Crowd)
crowd.scale = 1.8

crowdMiddle = createSprite(958,210,100,100)
crowdMiddle.addImage(Crowd)
crowdMiddle.scale = 1.8

crowdRight = createSprite(1600,210,100,100)
crowdRight.addImage(Crowd)
crowdRight.scale = 1.8
hoop1 = createSprite(360,370,30,600)
hoop1.addImage(Hoop1)
hoop1.scale = 8

outline = createSprite(1000,200,200,200)
outline.shapeColor = 'black'

pole = createSprite(1000,100,15,200)
pole.shapeColor = 'grey'

scoreboard = createSprite(1000,200,100,100)
scoreboard.addImage(Scoreboard)
scoreboard.scale = 0.4

hoop2 = createSprite(1550,370,30,600)
hoop2.addImage(Hoop2)
hoop2.scale = 8

ball = createSprite(1000,600,30,30)
ball.addImage(BasketballImage)
ball.scale = 0.5

backwhitewall = createSprite(954,500,1800,10)
backwhitewall.shapeColor = 'white'

frontwhitewall = createSprite(954,850,1800,10)
frontwhitewall.shapeColor = 'white'

rightwhitewall = createSprite(59,675,10,360)
rightwhitewall.shapeColor ='white'

leftwhitewall = createSprite(1850,675,10,360)
leftwhitewall.shapeColor = 'white'

player1 = createSprite(500,620,50,50)
player1.addImage(LeBronImage)
player1.scale=0.65

player2 = createSprite(1500,600,50,50)
player2.addImage(StephImage)
player2.scale = 0.7

invisibleGround = createSprite(1000,800,1940)
invisibleGround.visible = true

invisibleRoof = createSprite(1000,550,1940, 20)
invisibleRoof.visible = true

invisibleWallLeft = createSprite(100,450,30,800)
invisibleWallLeft.visible = true

invisibleWallRight = createSprite(1800,450,30,800)
invisibleWallRight.visible = true


//wall = createSprite(500,300,100,100)
}


function draw(){
background('tan')

drawSprites()
player1.collide(invisibleGround)
player2.collide(invisibleGround)
ball.collide(invisibleGround)

player1.velocityY = player1.velocityY + 0.8
player2.velocityY = player2.velocityY + 0.8
player1.collide(player2)


ball.velocityY = ball.velocityY - 0.6 


if(keyDown("RIGHT_ARROW")){
player2.x = player2.x + 10
ball.bounceOff(invisibleGround)
   
}

if(keyDown("LEFT_ARROW")){
    player2.x = player2.x - 10
    ball.bounceOff(invisibleGround)
   
}

if(keyDown("UP_ARROW") && player2.y >=500){
    player2.y = player2.y - 45
    ball.bounceOff(invisibleGround)
   
}

if(keyDown("W") && player1.y >=500){
    player1.y = player1.y - 40
    ball.bounceOff(invisibleGround)
   
}

if(keyDown("D")){
    player1.x = player1.x + 10
    ball.bounceOff(invisibleGround)
   
}

if(keyDown("A")){
    player1.x = player1.x - 10
    ball.bounceOff(invisibleGround)
   
}
 if(keyDown("space")){
    
    ball.x=180
    ball.y=370
    
    ball.velocityY =  0
    ball.velocityX=0
    ball.velocityY=ball.velocityY+0.9

 }








if(ball.isTouching(invisibleGround)){
    ball.bounceOff(invisibleGround)
   
}

if(ball.isTouching(invisibleWallLeft)){
    ball.bounceOff(invisibleWallLeft)
}

if(ball.isTouching(invisibleWallRight)){
    ball.bounceOff(invisibleWallRight)
}

if(ball.isTouching(invisibleRoof)){
    ball.bounceOff(invisibleRoof)

}

if(ball.isTouching(player1)){
    ball.x = player1.x+100
    ball.bounceOff(invisibleGround)
    ball.velocityY = ball.velocityY - 0.9
}

if(ball.isTouching(player2)){
    ball.x = player2.x - 100
    ball.velocityY = ball.velocityY - 0.9
}
    //ball.velocityY = ball.velocityY - 0.9
//}


if(player1.x > 150 && player1.x < 400 && keyDown("w") && x != true){
    invisibleRoof.y = 10
    
    ball.velocityY = 1
    ball.velocityX = 50


   
   
}

if(ball.isTouching(invisibleGround)){ 
    console.log
    ball.x = 1000
    ball.y = 600
    invisibleRoof.y = 550
    ball.velocityY = 0
    ball.velocityX = 0
    x = true
   }



}

