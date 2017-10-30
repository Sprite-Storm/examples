export default class GameState extends Lightning.Scene {

    public create() {
        // infinite looping
        let cube:Lightning.Sprite = new Lightning.Sprite(<Lightning.Texture>Lightning.Geometry.Square(50, 0xff2200));
        this.add(cube);

        let tween:Lightning.Tween = this.game.tweens.create(cube);
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);
        tween.loops = -1;
        tween.start();

        setTimeout(() => {
            tween.pause(true);
        }, 1000);

        setTimeout(() => {
            tween.pause(false);
        }, 2000);
    }

    update() {
        console.log('hi')
    }
}