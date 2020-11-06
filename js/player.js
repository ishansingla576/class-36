class Player
{
constructor()
{
    this.index = null;
    this.distance = 0;
    this.name = null;
}

getPlayerCount() 
{
    var playerCountref = Database.ref('playerCount');
    playerCountref.on("value",(data)=>{
        
        playerCount = data.val();

    })

}

updatePlayerCount(count)
{
Database.ref('/').update({
    playerCount: count
})
}

updateInfo()
{
    var PlayerName = "Players/Player" + this.index;
    console.log(PlayerName);
    Database.ref(PlayerName).set({
        Name: this.name,
        distance: this.distance
    })
}

static getPlayerInfo()
{
    var playerInforef = Database.ref('players');
    playerInforef.on("value",(data)=>{

        allPlayers = data.val();
    })
}

}