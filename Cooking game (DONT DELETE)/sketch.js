var gameState, database, pots, ingredients, bombs;
var basilIMG, garlicIMG, potIMG, tomatoIMG, chefIMG;

var form;

function preload() {
    /* basilIMG = loadImage("images/basil.png");
    garlicIMG = loadImage("images/garlic.png");
    potIMG = loadImage("images/pot.png");
    tomatoIMG = loadImage("image/tomato.png");
    chefIMG = loadImage("images/chef.png"); */
}

function setup() {
    createCanvas(1200, 600);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    form = new Form();
    
}

function draw(){
    form.display();
}