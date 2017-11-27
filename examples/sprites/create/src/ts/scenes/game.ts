export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics:Lightning.Graphics = Lightning.Geometry.Square(50, 0xffffff);

        //Create a texture from our graphics opject
        let texture:Lightning.Texture = graphics.generateCanvasTexture();

        //Create sprite from our texture and set our x and y positions
        let sprite:Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;

        //Add our sprite to our game world.
        this.add(sprite);
    }
}