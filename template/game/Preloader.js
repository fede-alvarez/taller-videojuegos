/**
 * Preloader
 */
BasicTemplate.Preloader = function (game)
{
    this.ready = false;
};

BasicTemplate.Preloader.NEXT_STATE = 'Menu';

BasicTemplate.Preloader.prototype = {

    preload: function ()
    {
        game.add.sprite(0,0,'loaderScreen');

        this.lbContainer = game.add.sprite(0,0,'loaderBarContainer');
        this.lbContainer.anchor.setTo(.5,.5);
        this.lbContainer.x = game.world.width * .5;
        this.lbContainer.y = game.world.height * .5;

        this.preloadBar = game.add.sprite(0,0,'loaderBar');
        this.preloadBar.anchor.setTo(0,.5);
        this.preloadBar.x = game.world.width * .5;
        this.preloadBar.y = game.world.height * .5;

        game.load.image('genericBg',    ASSETS_PATH + 'generic_bg.png' );
        game.load.image('gameLogo',    ASSETS_PATH + 'game_logo.png' );

        game.load.image('playButton',    ASSETS_PATH + 'menu_play_button.png' );
    },

    update: function ()
    {
        // Si está todo listo
        if (this.ready === false)
            this.game.state.start(BasicTemplate.Preloader.NEXT_STATE);
    }
};
