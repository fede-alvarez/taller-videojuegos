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

        // Cargando los recursos para el resto del juego
        game.load.image('genericBg',    ASSETS_PATH + 'generic_bg.png' );
        game.load.image('gameLogo',    ASSETS_PATH + 'game_logo.png' );

        game.load.image('playButton',    ASSETS_PATH + 'menu_play_button.png' );

        // Cargando los gráficos ingame
        game.load.image('gameBg',    INGAME_PATH + 'background.png');
        game.load.image('bullet',    INGAME_PATH + 'bullet.png');
        game.load.image('explosion', INGAME_PATH + 'explosion.png');
        game.load.image('itemAmmo',  INGAME_PATH + 'item_bullets.png');
        game.load.image('itemFx',    INGAME_PATH + 'item_effect.png');
        game.load.image('life',      INGAME_PATH + 'life.png');

        game.load.spritesheet('player', INGAME_PATH + 'player_4x1.png', 67,74,4);
        game.load.spritesheet('enemy',  INGAME_PATH + 'enemy_sheet.png', 45,47,2);
    },

    update: function ()
    {
        // Si está todo listo
        if (this.ready === false)
            this.game.state.start(BasicTemplate.Preloader.NEXT_STATE);
    }
};
