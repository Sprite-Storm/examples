export default class PreloadScene extends Lightning.Scene {

    init() {
        this.create();
    }

    create() {
        this.game.scenes.start('game');
        this.game.scenes.destroy('preload');
    }
}