export default class GameScene extends Lightning.Scene {

    public create() {

        // create a sample cube
        let cube:Lightning.Sprite = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        this.add(cube);

        // create a basic tween
        let tween:Lightning.Tween = this.game.tweens.create(cube);
        // from, to, time, property, easing, delay
        // tween the x position
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);
        // tween the y position
        tween.createAnim(0, 250, 500, 'y', Lightning.Easing.SineInOut);
        // tween the alpha
        tween.createAnim(1, 0.4, 300, 'alpha', Lightning.Easing.ElasticIn);

        // start the tween here
        tween.start();
    }
}