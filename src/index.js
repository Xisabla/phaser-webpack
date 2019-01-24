import Phaser from 'phaser';

// Example based on: https://github.com/lean/phaser-es6-webpack
//  Check branch "phaser3": https://github.com/lean/phaser-es6-webpack/tree/phaser3

import BootScene from './scenes/Boot';
import SplashScene from './scenes/Splash';
import GameScene from './scenes/Game';

import config from './config';

const gameConfig = Object.assign(config, {
    scene: [BootScene, SplashScene, GameScene]
});

class Game extends Phaser.Game
{
    constructor ()
    {
        super(gameConfig);
        console.log('Using a custom Game Object');
    }
}

window.game = new Game();
