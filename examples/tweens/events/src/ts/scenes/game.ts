export default class GameScene extends Lightning.Scene {

    public create() {

        // create a sample cube and add it to the scene
        let cube:Lightning.Sprite = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        this.add(cube);

        // create a basic tween
        let tween:Lightning.Tween = this.game.tweens.create(cube);
        // from, to, time, property, easing, delay
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);

        // subscribe to start event
        tween.subscribe('start', () => {
            console.log('tween started');
        });

        // subscribe to the tick event (gets called on every tween update)
        tween.subscribe('tick', () => {
            console.log('tween update');
        });

        // subscribe once to the complete event
        tween.subscribeOnce('complete', () => {
            console.log('tween completed');
        });

        /**
         * Full list of events:
         * start
         * pause
         * tick
         * loop
         * complete
         * reset
         * destroy
         */

        // start the tween
        tween.start();

    }
}