import Colours from './../utils/colours';

export default class BootState extends Lightning.Scene {

    init(params) {
        this.game.backgroundColor = Colours.BG;
        this.create();
    }

    create() {
        this.game.scenes.start('preload');
        this.game.scenes.destroy('boot');
    }
}