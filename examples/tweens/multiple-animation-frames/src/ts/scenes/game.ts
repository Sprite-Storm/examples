export default class GameScene extends Lightning.Scene {

    public create() {

        // create a sample cube
        let cube:Lightning.Sprite = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        this.add(cube);

        let tween = this.game.tweens.create(cube);
        // use frames for importing static animations
        tween.importAnim('y', [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        tween.importAnim('x', [25, 30, 35, 45, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);

        // start the tween
        tween.start();
    }
}