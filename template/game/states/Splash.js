/**
 * Splash State
 * @description
 */
BasicTemplate.Splash = function (game)
{
    this.imgSplash = null;
    this.imgIndex  = 0;
    this.currentSplash = null;
};

/** @type {String} El siguiente estado luego del Splash */
BasicTemplate.Splash.SPLASH_NEXT_STATE = 'Preloader';
/** @type {Number} Tiempo en pantalla (Milisegundos) */
BasicTemplate.Splash.SPLASH_SCREEN_TIME = 2000;
/** @type {Array} Listado de imagenes */
BasicTemplate.Splash.SPLASH_IMAGES = [
    { imageName : 'splashScreen', screenTime: BasicTemplate.Splash.SPLASH_SCREEN_TIME }
];

BasicTemplate.Splash.prototype = {

    preload: function ()
    {
        this.imgSplash = BasicTemplate.Splash.SPLASH_IMAGES;

        this.currentSplash = this.imgSplash[this.imgIndex];
        this.bg = game.add.sprite(0,0, this.currentSplash.imageName);

        var scnTime = this.currentSplash.screenTime || BasicTemplate.Splash.SPLASH_SCREEN_TIME;

        this._tween = game.add.tween(this.bg).to({alpha:0}, 850, "Linear", true, scnTime );
        this._tween.onComplete.addOnce(this.updateSplash, this);
    },

    updateSplash: function ()
    {
        if( this._tween )
            this.game.tweens.remove(this._tween);

        this.imgIndex++;

        if( this.imgIndex > this.imgSplash.length - 1 ) {
            this.game.state.start(BasicTemplate.Splash.SPLASH_NEXT_STATE);
            return;
        }

        var newSplash  = this.imgSplash[this.imgIndex],
            splashTime = newSplash.screenTime || BasicTemplate.Splash.SPLASH_SCREEN_TIME;

        this.bg.loadTexture( newSplash.imageName );

        this._tween = game.add.tween(this.bg).to({alpha:0}, 1000, "Linear", true, splashTime);
        this._tween.onComplete.addOnce(this.reset, this);
    },

    reset : function()
    {
        this.bg.alpha = 1;
        this.updateSplash();
    }
};
