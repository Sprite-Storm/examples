export default class GameScene extends Lightning.Scene {

    private _sprite2:Lightning.Sprite;

    public create() {
        //Define graphics
        let graphics: Lightning.Graphics = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics opject
        let texture: Lightning.Texture = graphics.generateCanvasTexture();

        //Create sprite from our texture and set our x and y positions
        let sprite:Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.setAnchor(0.5)
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;

        //Create our second sprite from our texture and set our x and y positions
         this._sprite2 = new Lightning.Sprite(texture);
         this._sprite2.setAnchor(0.5);
         this._sprite2.x = this.game.center.x * 0.7;
         this._sprite2.y = this.game.center.y;

        //Set our second sprites rotation. PLEASE NOTE rotation is measured in radians, here we are using our built in Maths function to convert degrees to radians
        

        //Add our First to our game world.
        this.add(sprite);

        //Add our Second to our game world.
        this.add(this._sprite2);
    }

    update() {
        this._sprite2.rotation += Lightning.Maths.degreesToRadians(2);
    }
}