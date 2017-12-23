export default class GameScene extends Lightning.Scene {

    public create() {

        // create a sample cube
        let cube:Lightning.Sprite = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        // as sprites are anchored 0, 0 by default, scale tweens can look weird, so lets set the anchor to the center of the 
        // sprite to begin with.
        cube.setAnchor(0.5);
        cube.x = 100;
        cube.y = 100;
        this.add(cube);

        let tween = this.game.tweens.create(cube.scale);
        // use values to be applied to the y property
        tween.createAnim(1, 0, 500, 'x', Lightning.Easing.BounceInOut);
        tween.createAnim(1, 0, 500, 'y', Lightning.Easing.BounceInOut);

        // start the first tween now
        tween.start();

    }
}