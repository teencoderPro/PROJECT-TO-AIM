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
                    nane = new Name();
                    nane.getCount();
                    form = new Form()
                    form.display();


               }
          }
}