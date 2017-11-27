export default class BootScene extends Lightning.Scene {

    init(params) {
        this.game.backgroundColor = 0x431DBD;
        this.create();
    }

    create() {
        this.game.scenes.start('preload');
        this.game.scenes.destroy('boot');
    }
}