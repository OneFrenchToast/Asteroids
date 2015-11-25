var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');


game.state.add('menu', menuState);
game.state.add('game', gameState);

game.state.start('menu');



