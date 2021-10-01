class Form {
     constructor() {
       
     }
   
     display(){
       var title = createElement('h2')
       title.html("REGISTER PLAYER NAME");
       title.position(130,0);

       this.input = createInput("Name");
       this.button = createButton('CONTINUE');

       this.input.position(130,160);
       this.button.position(250,200);

       

       
   
     }
   }
   