/**
 * Game State
 * @description
 */
BasicTemplate.Game = function (game)
{
    /* General Settings */
    this.gamePaused = true;
    this.gameEnded  = false;

    /* General Usage */
    this.mainFont = { font: "32px Arial", fill: "#CCC" };
};

BasicTemplate.Game.ESTO_ES_UNA_CONSTANTE = "VALOR";

BasicTemplate.Game.prototype = {
    /**
     * Create
     * @return {void}
     */
    create: function ()
    {
        /* Mostrar 'Frames Per Second' (FPS) */
        game.time.advancedTiming = true;
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
    render : function()
    {
        /* Dibuja/Escribe los FPS actuales */
        game.debug.text(game.time.fps, 2, 14, "#00ff00");
    }
};
