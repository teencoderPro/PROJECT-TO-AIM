class Game {
     constructor(){}

     getState(){
          var gameStateRef = database.ref('gameState');
          gameStateRef.on("value",function(data){
               gameStateRef = data.val();
          })
     }
     update(state){
          database.ref('/').update({
               gameState: state
               });
          }

     start(){
          if(gameState === 0){
               player = new Player();
               form = new Form()
               form.display();
               }

          
                    }
}
