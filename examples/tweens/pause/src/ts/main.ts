import BootState from './states/boot';
import PreloadState from './states/preload';
import GameState from './states/game';

export default class Game {

    public game:Lightning.Engine;

    constructor(width:number = 500, height:number = 500, divId:string = 'app') {
        this.game = new Lightning.Engine(width, height, {
            rendererOptions: {
                transparent: false
            }
        });
        this.game.scenes.add('boot', new BootState());
        this.game.scenes.add('preload', new PreloadState());
        this.game.scenes.add('game', new GameState());

        this.game.scenes.start('boot');
    }
}

let width = window.innerWidth;
let height = width * 0.7;
window.onload = () => {
    new Game(width, height);
}