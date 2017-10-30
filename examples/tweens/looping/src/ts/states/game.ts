export default class GameState extends Lightning.Scene {

    public create() {
        // infinite looping
        let cube:Lightning.Sprite = new Lightning.Sprite(<Lightning.Texture>Lightning.Geometry.Square(50, 0xff2200));
        this.add(cube);

        let tween:Lightning.Tween = this.game.tweens.create(cube);
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.linear);
        tween.loops = -1;
        tween.start();

        // n loops
        let cube2:Lightning.Sprite = new Lightning.Sprite(<Lightning.Texture>Lightning.Geometry.Square(50, 0xff2200));
        cube2.y = 100;
        this.add(cube2);

        let tween2:Lightning.Tween = this.game.tweens.create(cube2);
        tween2.createAnim(0, 250, 500, 'x', Lightning.Easing.linear);
        tween2.loops = 5;
        tween2.start();
    }
}