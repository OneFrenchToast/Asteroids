var potato = {

    preload: function() {
        game.load.image('endScreen', 'assets/EndingPage.png');
    },

    create: function() {
        this.add.button(0, 0, 'endScreen', this.resetGame, this);
    },

    resetGame: function() {
        location.reload();
    }
}