class Form
{
constructor()
{

}

display()
{
var title = createElement('h2');
title.html("Car Race");
title.position(130,0);

var Input = createInput("Name");
var button = createButton('Start');

Input.position(130,160);
button.position(250,300);
button.mousePressed(()=>{
Input.hide();
button.hide();
player.Name = Input.value();
playerCount = playerCount+1; 
player.index = playerCount;

player.updateInfo();
console.log(playerCount);
player.updatePlayerCount(playerCount);
var greeting = createElement('h3');
greeting.html("Hello " + player.Name);
greeting.position(130,160);
})
}

}