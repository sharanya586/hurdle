class Game {
    constructor(){
    }
  
    getState(){
      var toread = database.ref('gameState');
      toread.on("value",function (data) {
          gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        'gameState': state
      });
    }
  
    async start(){

      /* if(gameState === 0){
          form = new Form()
         form.display();
         player = new Player();
         var playerCountRef = await database.ref('playerCount').once("value");
         if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
         }
        
       }*/
 
       player = new Player();
      
       player.getCount();
     
       form = new Form()
       form.display(); 

      p1 = createSprite(50,0,10,10);
      p1.addAnimation("label1",Img)
      p2 = createSprite(50,200,10,10);
      p2.addAnimation("label2",Img)
      p3 = createSprite(50,400,10,10);
      p3.addAnimation("label3",Img)
      p4 = createSprite(50,600,10,10);
      p4.addAnimation("label4",Img)
      ps = [p1, p2, p3, p4];
    }
  
     play(){
   
    player.getplayerRank();
    form.hide();
    Player.getplayerInfo();
    
    if(allPlayers !== undefined){
      background(100);
      image(track,0,0,displayWidth*5,displayHeight);
      
      var index = 0;
      var y = -20 ;
      var x=0;

      for(var plr in allPlayers){

        index = index + 1 ;
        y = y + 180;
        x = displayHeight- allPlayers[plr].distance-600;
        
        if(index<5){
          ps[index-1].x = x;
          ps[index-1].y = y;
          console.log(player.distance)
        }

        if (index === player.index) {
          ps[index - 1].shapeColor = "red";
          camera.position.y = displayHeight/2;
          camera.position.x = ps[index-1].x+500; 
        }
      }
    }

    if ( keyDown(RIGHT_ARROW) ) {
      player.distance -= 10;
      player.update();
    }
    if (player.distance<=-3760) {
      console.log(player.distance)
      gameState = 2 ;     
    }

  drawSprites();
  }
}