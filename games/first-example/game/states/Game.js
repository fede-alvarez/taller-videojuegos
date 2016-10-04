/**
 * Game State
 * @description
 */
BasicTemplate.Game = function (game)
{
    /* Estados del juego */
    this.gamePaused = true;
    this.gameOver   = false;

    /* Uso general */
    this.mainFont = { font: "32px Arial", fill: "#CCC" };

    /* Elementos del juego */
    this.player  = null;
    this.direction = 90;

    this.enemies = null;
    this.ENEMY_SPAWN_TIME = 100;

    this.bullets = null;
    this.bulletsCount = 100;
    this.bulletTime = 0;
    this.bulletVelocity = 500;
};

//BasicTemplate.Game.ESTO_ES_UNA_CONSTANTE = "VALOR";

BasicTemplate.Game.prototype = {

    create: function ()
    {
        /* Mostrar 'Frames Per Second' (FPS) */
        game.time.advancedTiming = true;

        // Inicializamos el sistema de fisica
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // Agregamos el background
        game.add.sprite(0,0,'gameBg');

        // Creamos el player en el medio del escenario
        this.createPlayer();
        this.createEnemies();
        this.createBullets();

        this.textLeft = game.add.text(20, 20, "Cantidad Balas: " + String(this.bulletsCount), { font: "16px Arial", fill: "#ffffff", align: "center" });

        // Detectamos cualquier entrada del teclado
        this.cursors  = game.input.keyboard.createCursorKeys();
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        // Evita que al presionar estas teclas jugando al juego se ejecuten eventos del navegador
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.UP, Phaser.Keyboard.DOWN, Phaser.Keyboard.SPACEBAR ]);
    },

    update : function()
    {
        if (this.cursors.up.isDown) {
            this.direction = 0;
            this.player.animations.play('back', 1, false);
            this.player.y -= 5;
        }

        if( this.cursors.down.isDown) {
            this.direction = 90;
            this.player.animations.play('front', 1, false);
            this.player.y += 5;
        }

        if (this.cursors.left.isDown) {
            this.direction = 270;
            this.player.animations.play('left', 1, false);
            this.player.x -= 5;
        }

        if( this.cursors.right.isDown) {
            this.direction = 180;
            this.player.animations.play('right', 1, false);
            this.player.x += 5;
        }

        if (this.spaceKey.isDown) {
            this.fireBullet();
        }
    },

    /**
     * Creamos el Player
     */
    createPlayer : function()
    {
        // Agregamos el sprite al juego y dejamos una referencia this.player
        this.player = game.add.sprite(0,0,'player');
        // Seteamos el anchor (punto ancla) a la mitad en X y abajo en Y
        this.player.anchor.setTo(0.5, 1);

        // Definimos las animaciones
        this.player.animations.add('front', [1]);
        this.player.animations.add('back',  [0]);
        this.player.animations.add('left',  [2]);
        this.player.animations.add('right', [3]);

        // Le decimos que animaciones queremos ejecutar
        this.player.animations.play('front', 1, false);

        // Colocamos al jugador en un X / Y dados
        this.player.x = game.world.centerX;
        this.player.y = game.world.centerY + this.player.height * .5;
    },

    createEnemies : function()
    {
        this.enemies = game.add.group();

        this.enemies.enableBody = true;
        this.enemies.physicsBodyType = Phaser.Physics.ARCADE;

        this.enemies.createMultiple(10, 'enemy');

        this.spawnEnemies();
    },

    spawnEnemies : function()
    {
        console.log("Spawn Enemies");

        var enemy = this.enemies.getFirstExists(false);
        enemy.anchor.setTo(0.5, 1);
        enemy.reset(game.rnd.integerInRange(100, game.world.width - 100), game.rnd.integerInRange(100, game.world.height - 100));
    },

    createBullets : function()
    {
        this.bullets = game.add.group();

        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

        this.bullets.createMultiple(10, 'bullet');

        this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetBullet, this);
        this.bullets.setAll('checkWorldBounds', true);
    },

    fireBullet : function()
    {
        if (game.time.now > this.bulletTime)
        {
            var bullet = this.bullets.getFirstExists(false);

            if (bullet)
            {
                bullet.reset(this.player.x, this.player.y - this.player.height * .5);
                bullet.anchor.setTo(.5,.5);

                switch(this.direction) {
                    case 0:
                        bullet.angle = 90;
                        bullet.body.velocity.y = -this.bulletVelocity;
                        break;
                    case 90:
                        bullet.angle = -90;
                        bullet.body.velocity.y = this.bulletVelocity;
                        break;
                    case 180:
                        bullet.angle = -180;
                        bullet.body.velocity.x = this.bulletVelocity;
                        break;
                    case 270:
                        bullet.angle = 0;
                        bullet.body.velocity.x = -this.bulletVelocity;
                        break;
                }


                this.bulletTime = game.time.now + 100;
            }
        }
    },

    resetBullet : function( bullet )
    {
        bullet.kill();
    },

    render : function()
    {
        /* Dibuja/Escribe los FPS actuales */
        game.debug.text(game.time.fps, 2, 14, "#00ff00");
    }
};
