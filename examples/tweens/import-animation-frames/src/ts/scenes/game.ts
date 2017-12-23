export default class GameScene extends Lightning.Scene {

    public create() {

        // create a sample cube
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

        // start the regular tween here
        // tween.start();

        let tween2 = this.game.tweens.create(cube);
        // use frames for importing static animations
        tween2.importAnim('y', [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        tween2.importAnim('x', [25, 30, 35, 45, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);

        // chain tween 1 with chain 2
        tween.chain(tween2);

        // start the first tween now
        tween.start();

    }
}