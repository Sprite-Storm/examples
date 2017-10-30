export default class GameState extends Lightning.Scene {

    public create() {
        // infinite looping
        let cube:Lightning.Sprite = new Lightning.Sprite(<Lightning.Texture>Lightning.Geometry.Square(50, 0xff2200));
        this.add(cube);

        let tween:Lightning.Tween = this.game.tweens.create(cube);
        tween.createAnim(0, 250, 500, 'y', Lightning.Easing.ExpoInOut);

        tween.subscribe('start', () => {
            console.log('tween started');
        });

        tween.subscribe('complete', () => {
            console.log('tween completed');
        });

        tween.start();

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
    }
}