/// <reference path="../libs/phaser.d.ts" />

class FlatTile {

    game: Phaser.Game;

    constructor() {
      this.game = new Phaser.Game(640, 480, Phaser.CANVAS, 'content', { preload: this.preload, create: this.create });
      //this.game.state.add('intro', this.IntroState);     // Add "intro" state.
      //this.game.state.start('intro');              // Start "intro" state.**/
    }

    preload() {
      this.game.load.image('logo', '../assets/boaromayo-splash.png');
    }

    create() {
      var logo = this.game.add.sprite(0, 0, 'logo');
      logo.alpha = 0; // Set to invisible

      // Fade-in and fade-out splash screen
      var fadein = this.game.add.tween(logo);
      fadein.to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, 
        true, 0, 2000, true);
    }
}