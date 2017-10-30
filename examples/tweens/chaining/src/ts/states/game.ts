export default class GameState extends Lightning.Scene {

    public create() {
        // infinite looping
        let cube:Lightning.Sprite = new Lightning.Sprite(<Lightning.Texture>Lightning.Geometry.Square(50, 0xff2200));
        this.add(cube);

        let tween:Lightning.Tween = this.game.tweens.create(cube);
        tween.createAnim(0, 250, 1000, 'x', Lightning.Easing.ExpoInOut);

        let tween2:Lightning.Tween = this.game.tweens.create(cube);
        tween2.createAnim(0, 250, 1000, 'y', Lightning.Easing.ExpoInOut);

        tween.chain(tween2);
        tween.start();
    }
}