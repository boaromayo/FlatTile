/// <reference path="../libs/phaser.d.ts" />

class FlatTile extends Phaser.Game {

  constructor() {
    super();
    this.state.add('intro', IntroState);     // Add "intro" state.
    this.state.start('intro');              // Start "intro" state.
  }
}
