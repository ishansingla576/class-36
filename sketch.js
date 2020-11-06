var Database;
var form, player,game;
var GameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
function setup()
{
    Database = firebase.database();
    createCanvas(500,500);   
    game = new Game();
    game.getState();
    game.start();

}
function draw()
{   
    background(255);
    drawSprites();
    if(playerCount === 4)
    {
        GameState = 1;
    }
    if(GameState === 1)
    {
        clear();
        game.Play();
    }
}

