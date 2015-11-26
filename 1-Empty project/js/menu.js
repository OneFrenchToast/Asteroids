var menuState = {

    preload: function () {

        game.load.image('startScreen', 'assets/WeDemBoyz.png');
        game.load.audio('menuTheme', ['assets/menuTheme.ogg']);
    },

    create: function() {
        this.music = this.game.add.audio('menuTheme');
        this.music.volume = 0.1;
        this.music.loop = true;
        this.music.play();

        this.add.button(0, 0, 'startScreen', this.startGame, this);
    },

    startGame: function() {
        
        game.state.start('game');
        this.music.stop();
    },
}