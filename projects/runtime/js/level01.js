level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1,
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:300,y:250},
                {type: 'sawblade',x:600,y:265},
                {type: 'sawblade',x:800,y:groundY},
                {type: 'sawblade',x:1000,y:groundY},
                {type: 'sawblade',x:1100,y:groundY},
                {type: 'sawblade',x:1200,y:250},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
        var hitZoneSize = 30;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle);
    var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
    }
for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItem = levelData.gameItems[i];
    createSawBlade(gameItem.x, gameItem.y);
}
    function createBox(x,y){
var hitZoneSize = 50;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
    myObstacle.x = x;
    myObstacle.y = y;
game.addGameItem(myObstacle);
var obstacleImage = draw.bitmap('http://www.pngmart.com/files/7/Box-PNG-Free-Download.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -50;
obstacleImage.y = -50;
    obstacleImage.scaleX = .15;
obstacleImage.scaleY = .15;
}
    createBox(1400,groundY);
    createBox(1400,groundY);
    createBox(1800,groundY);

function createEnemy(x,y){
var enemy =  game.createGameItem('enemy',300);
var redSquare = draw.bitmap('https://www.pngkey.com/png/full/66-668469_blue-flame-boss-fire-enemy-pixel-art.png');
redSquare.x = -300;
redSquare.y = -300;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.onPlayerCollision = function() {
game.changeIntegrity(-700);
};
enemy.onProjectileCollision = function(){
    enemy.fadeOut();
    game.increaseScore(4000);
};
console.log('The enemy has hit Halle');
}
createEnemy(1600,groundY-100);
function createReward(x,y){
var reward =  game.createGameItem('Reward',40);
var redSquare = draw.bitmap('https://freepngimg.com/thumb/sword/20185-7-warcraft-sword.png');
redSquare.x = -60;
redSquare.y = -60;
reward.addChild(redSquare);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = -1;
reward.scaleX = .45;
reward.scaleY = .45;
reward.onPlayerCollision = function() {
game.changeIntegrity(-20);
game.increaseScore(2800);
};
console.log('The enemy has hit Halle');
}
createReward(2400,groundY-75);
};

};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}