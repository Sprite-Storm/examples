export default class GameScene extends Lightning.Scene {

    public create() {

        let text:Lightning.Text = new Lightning.Text('Refresh to change spawn.', <any>{fontSize: 32, fill: 0xffffff});
        text.x = this.game.width * 0.5;
        text.y = this.game.height * 0.050;
        this.add(text);
        /**
         * Create our shape using Lightning Geometry Square function
         * Inside our function pass our dimension, tint, and alpha
         */
        let shape: Lightning.Geometry = Lightning.Geometry.Square(100, 0xffffff, 1);

        //Create a texture from our Geometry shape.
        let texture: Lightning.Texture = this.game.generateTexture(shape);

        /**
         * Create our sprite from our texture
         */
        let sprite= new Lightning.Sprite(this.game.texture(texture));

        /**
         * Set our sprites x and y to random positions using Lightning Maths rngInt function
         * Set our from and to for random spawn area. In this case we use game width/height * 0.1 for a buffer and then game width/height * 0.5 to keep our sprite spawning in this area
         */
        sprite.x = Lightning.Maths.rngInt(this.game.width * 0.1, this.game.width * 0.5)
        sprite.y = Lightning.Maths.rngInt(this.game.height * 0.1, this.game.height * 0.5)

        /**
         * Set our sprite anchor x and y to 0.5
         * Add our sprite to the world
         */
        sprite.setAnchor(0.5);
        this.add(sprite);

    }
}