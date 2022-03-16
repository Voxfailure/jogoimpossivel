var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var mortes = 0;
var fire1, fire2, fire3,fire4,fire5;
var parede1, parede2;
var pig;


  parede1 = createSprite(190,12,420,3);
 parede2 = createSprite(190,260,420,3);
  parede1.shapeColor = "red"
  parede2.shapeColor = "red"
  
  
  
  
  pig = createSprite(20,190,13,13);
  pig.shapeColor = "green";
  
  fire1 = createSprite(100,130,10,10);
  fire1.shapeColor = "purple";
 fire2 = createSprite(215,130,10,10);
 fire2.shapeColor = "gray";
 fire3 = createSprite(165,250,10,10);
 fire3.shapeColor = "red";
 fire4 = createSprite(270,250,10,10);
 fire4.shapeColor = "orange";
 fire5=createSprite(315,130,10,10)
  fire5.shapeColor = "blue";
 
//velocidade
 fire5.velocityY = 6
 fire1.velocityY = 6
 fire2.velocityY = 6
 fire3.velocityY = 6
 fire4.velocityY = 6

function draw() {
   background("white");
  text("mortes: " + mortes,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// parede
   pig.bounceOff(parede1);
  fire5.bounceOff(parede2);
  fire5.bounceOff(parede1);
   fire1.bounceOff(parede1);
   fire1.bounceOff(parede2);
   fire2.bounceOff(parede1);
  fire2.bounceOff(parede2);
  fire3.bounceOff(parede1);
  fire3.bounceOff(parede2);
   fire4.bounceOff(parede1);
  fire4.bounceOff(parede2);
//andar
if (keyDown("RIGHT")){
pig.x=pig.x+2


}
   function __() {
     
   }






//fogo
if(
  
     pig.isTouching(fire1)||
    pig.isTouching(fire2)||
     pig.isTouching(fire3)||
     pig.isTouching(fire4))
  {
     pig.x = 20;
     pig.y = 190;
     mortes = mortes + 1;
  }

 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
