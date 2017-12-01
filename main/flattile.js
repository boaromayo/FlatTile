/// <reference path="../libs/phaser.d.ts" />
var FlatTile = /** @class */ (function () {
    function FlatTile() {
        this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        /**super();
        this.state.add('intro', IntroState);     // Add "intro" state.
        this.state.start('intro');              // Start "intro" state.**/
    }
    FlatTile.prototype.preload = function () {
        this.game.load.image('logo', 'phaser2.png');
    };
    FlatTile.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    };
    return FlatTile;
}());
