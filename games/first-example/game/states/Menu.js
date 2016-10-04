/**
 * Menu State
 * @description
 */
BasicTemplate.Menu = function (game)
{
    /* General Usage */
    this.font = { font: "32px Arial", fill: "#CCC" };
};

BasicTemplate.Menu.ESTO_ES_UNA_CONSTANTE = "VALOR";

BasicTemplate.Menu.prototype = {
    /**
     * Create
     * @return {void}
     */
    create: function ()
    {
        this.bg   = game.add.sprite(0,0, 'genericBg');

        this.logo = game.add.sprite(0,0, 'gameLogo');
        this.logo.anchor.setTo(.5,.5);
        this.logo.x = game.world.width * .5;
        this.logo.y = 100;

        this.play = game.add.button(0,0, 'playButton', this.onButtonPressed, this);
        this.play.anchor.setTo(.5,.5);
        this.play.x = game.world.width * .5;
        this.play.y = game.world.height * .5 + 50;
    },

    /**
     * Update
     * @return {void}
     */
    update : function() {},

    /**
     * Render
     * @return {void}
     */
    render : function() {},

    /**
     * Manejo de presión de botones en la escena
     */
    onButtonPressed : function(evt)
    {
        if (evt.key == 'playButton')
            this.game.state.start('Game');
    }
};
