var potato = {

    preload: function() {
        game.load.image('endScreen', 'assets/EndingPage.png');

        game.load.audio('champion', ['assets/Champions.ogg', 'assets/Champions.m4a']);
    },

    create: function() {
        this.add.button(0, 0, 'endScreen', this.resetGame, this);

        this.music = this.game.add.audio('champion');
        this.music.volume = 0.9;
        this.music.loop = true;
        this.music.play();
    },

    resetGame: function() {
        location.reload();
    }
}