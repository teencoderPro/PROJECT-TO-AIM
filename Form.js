class Form {
     constructor() {
      this.input = createInput("");
      this.button = createButton('CONTINUE');
      
 
    }

     hide(){
      this.title.hide();
       this.button.hide();
       this.input.hide();
       
     }

   
     display(){
       var title = createElement('h2')
       title.html("REGISTER PLAYER NAME");
       title.position(130,0);

       this.input.position(130,160);
       this.button.position(250,200);

       this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        

        player.name = this.input.value();

        title.html("CHOOSE THE GAME MODE");
        title.position(130,0);

        this.pistol = createButton('PISTOL');
       this.SmgLmg = createButton('SMG & LMG');
       this.sniper = createButton('SNIPER');

       this.pistol.position(250,150);
       this.SmgLmg.position(250,200);
       this.sniper.position(250,250);

       this.pistol.mousePressed(()=>{
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();

        title.html("CHOOSE THE GAME MAP");
        title.position(130,0);

        this.bg1 = createButton('bg1');
       this.bg2 = createButton('bg2');
       this.bg3 = createButton('bg3');

       this.bg1.position(250,150);
       this.bg2.position(250,200);
       this.bg3.position(250,250);

       this.bg1.mousePressed(()=>{
        title.hide();
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();
        background("red");     

      });

       

      this.bg3.mousePressed(()=>{
        title.hide();
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();
        background("red");
      });


       });

       this.SmgLmg.mousePressed(()=>{
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();

        title.html("CHOOSE THE GAME MAP");
        title.position(130,0);

        this.bg1 = createButton('bg1');
       this.bg2 = createButton('bg2');
       this.bg3 = createButton('bg3');

       this.bg1.position(250,150);
       this.bg2.position(250,200);
       this.bg3.position(250,250);

       this.bg2.mousePressed(()=>{
        title.hide();
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();
        background("red");
      });


       });

       this.sniper.mousePressed(()=>{
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();

        title.html("CHOOSE THE GAME MAP");
        title.position(130,0);

        this.bg1 = createButton('bg1');
       this.bg2 = createButton('bg2');
       this.bg3 = createButton('bg3');

       this.bg1.position(250,150);
       this.bg2.position(250,200);
       this.bg3.position(250,250);

       this.bg2.mousePressed(()=>{
         
        title.hide();
        this.pistol.hide();
        this.SmgLmg.hide();
        this.sniper.hide();
        background("red");
      });

       });

       
       });
     }



     
   }
  
