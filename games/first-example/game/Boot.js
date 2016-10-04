/**
 * BasicTemplate Object
 * @description
 */
BasicTemplate = {};

/**
 * Variables útiles accesibles desde cualquier
 * contexto.
 */
var ASSETS_PATH  = 'assets/',
    INGAME_PATH  = ASSETS_PATH + 'ingame/',

    musicEnabled = true,
    soundEnabled = true,

    gameWidth    = 960, // Tamaño de ancho default
    gameHeight   = 640, // Tamaño de alto default

    debugMode    = false;

/* Fin Variables */

BasicTemplate.Boot = function (game) {};

BasicTemplate.Boot.prototype = {

    init : function()
    {
        /**
         * Escalamiento del juego
         */
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignVertically = true;
        game.scale.pageAlignHorizontally = true;
    },

    preload: function ()
    {
        /**
         * Podemos pre-cargar una imagen para luego utilizarla en nuestro juego
         * simplemente llamando a game.load.image. Esta recibe 2 parámetros:
         *
         * - assetName : Será el IDENTIFICADOR (id) del asset una vez cargado.
         * - assetPath : La ruta física del archivo.
         *
         * @example
         * game.load.image('assetName', assetPath );
         */

        game.load.image('splashScreen', ASSETS_PATH + 'splash_screen.png' );
        game.load.image('loaderScreen', ASSETS_PATH + 'loading_screen.png' );

        game.load.image('loaderBarContainer', ASSETS_PATH + 'loader_bar_container.png' );
        game.load.image('loaderBar',    ASSETS_PATH + 'loader_bar.png' );
    },

    create: function ()
    {
        game.stage.backgroundColor = '#000000'; // Negro por defecto

        game.stage.smoothed = false;
        game.state.start('Preloader');
    }
};