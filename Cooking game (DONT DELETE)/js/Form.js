class Form {
  constructor() {
    this.input = createInput("Name");
    this.button1 = createButton('Singleplayer');
    this.button2 = createButton('Multiplayer');
    this.button3 = createButton('Back');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Cooking Clash");
    this.title.position(1200/2, 0);
  
    this.input.position(1200/2 - 40 , 600/2 - 80);
    this.button1.position(500, 600/2);
    this.button2.position(1200/2 + 60, 600/2);
    this.button3.position(50,50);
    this.reset.position(1200-100,20);
  
    this.button1.mousePressed(()=>{
      this.input.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(530, 600/4);
    });

    this.button2.mousePressed(()=>{
      this.input.hide();
      this.button1.hide();
      this.button2.hide();
      var multiplayerText = "Sorry! Multiplayer is in progress";
      textSize(20);
      text(multiplayerText, 600, 300);
      this.button2.mousePressed(()=>{
        multiplayerText = "";
      });
    });
  
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  
  }
}
  