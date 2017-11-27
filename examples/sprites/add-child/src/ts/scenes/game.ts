export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics: Lightning.Graphics = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics opject
        let texture: Lightning.Texture = graphics.generateCanvasTexture();

        //Create sprite from our texture and set our x and y positions
        let sprite:Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;

        //Create our second sprite from our texture and set our x and y positions
        let sprite2: Lightning.Sprite = new Lightning.Sprite(texture);
        // sprite2.x = this.game.center.x * 0.7;
        // sprite2.y = this.game.center.y * 0.95;
        sprite2.setScale(0.5);
        sprite2.tint = 0x000000;
        sprite2.x = 10;
        sprite2.y = 10;

        //Add our First to our game world.
        sprite.addChild(sprite2);

        //Add our Second to our game world.
        this.add(sprite);
    }
}