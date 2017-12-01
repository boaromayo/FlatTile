/// <reference path="../libs/phaser.d.ts" />

class FlatTile {

    game: Phaser.Game;

  	constructor() {
  		this.game = new Phaser.Game(640, 480, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    	/**super();
    	this.state.add('intro', IntroState);     // Add "intro" state.
    	this.state.start('intro');              // Start "intro" state.**/
  	}

  	preload() {
  		this.game.load.image('logo', 'phaser2.png');
  	}

  	create() {
  		var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');

  		logo.anchor.setTo(0.5, 0.5);
  	}
}
