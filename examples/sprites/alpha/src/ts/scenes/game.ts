export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics: Lightning.Graphics = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics opject
        let texture: Lightning.Texture = graphics.generateCanvasTexture();

        //Create sprite from our texture and set our x and y positions
        let sprite: Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;

        //Create our second sprite from our texture and set our x and y positions
        let sprite2: Lightning.Sprite = new Lightning.Sprite(texture);
        sprite2.x = this.game.center.x * 0.7;
        sprite2.y = this.game.center.y;

        //Set our alpha to 0.3
        sprite2.alpha = 0.3;

        //Add our First to our game world.
        this.add(sprite);

        //Add our Second to our game world.
        this.add(sprite2);
    }
}