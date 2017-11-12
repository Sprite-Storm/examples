export default class PreloadScene extends Lightning.Scene {

    init() {
        this.create();
    }

    preload() {
        // this.loader.load();
    }

    preloadComplete() {
        // console.log('preload complete')
    }

    create() {
        this.game.scenes.start('game');
        this.game.scenes.destroy('preload');
    }
}