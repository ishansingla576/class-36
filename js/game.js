class Game
{
constructor(){

}

getState()
{
    var gameStateref = Database.ref('GameState');
    gameStateref.on("value",function (data) {

        GameState = data.val();
        
    })
}
updateState(state)
{
    Database.ref('/').update({
        GameState: state
    })
}

async start()
{
if(GameState === 0)
{
player = new Player();
var Playercountref = await Database.ref('playerCount').once("value");
if(Playercountref.exists())
{
    playerCount = Playercountref.val();
    player.getPlayerCount();
}

form = new Form();
form.display();
}

}

Play()
{
    //form.hide();
    textSize(16);
    text("Game Started", 100,100);
    Player.getPlayerInfo();

    if(allPlayers!== undefined)
    {
        var displayPosition = 130;
        for(var plr in allPlayers)
        {
            if(plr === "Player" + player.index)
            {
                fill("red");
            }
            else
            {
                fill("black");
            }
            displayPosition += 20;
            textSize(15);
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, displayPosition);
        }
    }

    if (keyDown("Up") && player.index !== null)
    {
        player.distance += 50;
        player.updateInfo();
        }
}

}