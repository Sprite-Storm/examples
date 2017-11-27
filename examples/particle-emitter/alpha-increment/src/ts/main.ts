import BootScene from './scenes/boot';
import PreloadScene from './scenes/preload';
import GameScene from './scenes/game';

export default class Game {

    public game:Lightning.Engine;

    constructor(width:number = 500, height:number = 500) {
        this.game = new Lightning.Engine(width, height, {
            divID: 'app-container',
            rendererOptions: {
                transparent: false
            }
        });
        this.game.scenes.add('boot', new BootScene());
        this.game.scenes.add('preload', new PreloadScene());
        this.game.scenes.add('game', new GameScene());

        this.game.scenes.start('boot');
    }
}

var div = document.getElementById('app-container');

let width = div.offsetWidth
let height = width * 0.7;
window.onload = () => {
    new Game(width, height);
}