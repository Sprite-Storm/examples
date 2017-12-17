export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics: Lightning.Graphics = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics opject
        let texture: Lightning.Texture = graphics.generateCanvasTexture();


        /**
         * Create some text at top of screen to state a refresh is needed to show a spawn change.
         */
        let text:Lightning.Text = new Lightning.Text('Refresh to change spawn', <any>{fontSize: 32, fill: 0xffffff});
        text.x = this.game.center.x;
        text.y = this.game.height * 0.1;
        this.add(text);

        //Create sprite from our texture
        let sprite:Lightning.Sprite = new Lightning.Sprite(texture);

        /**
         * Set our sprites x and y positions to a random position using our Maths.rngInt functionality
         * In the rndInt function pass a FROM position and TO position in our case it will be 0 for both the x and y and then width/height * 0.5 which will be half the width/height of our game world.
         */
        sprite.x = Lightning.Maths.rngInt(0, this.game.width * 0.5);
        sprite.y = Lightning.Maths.rngInt(0, this.game.height * 0.5);

        //Add our Second to our game world.
        this.add(sprite);
    }
}