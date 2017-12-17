export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics:any = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics object
        let texture: Lightning.Texture = graphics.generateCanvasTexture();

        /**
         * Create text to append to our sprite that is draggable
         * Set text anchor x and y to center
         */
        let spriteText: Lightning.Text = new Lightning.Text('Click Me!', <any>{ fontSize: 24, fill: 0x000000});
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;

        /**
         * Create our sprite
         * Set our x and y positions for game center
         * Set our sprites anchor to 0.5 which is center of the sprite
         * Add out text to our sprite to tell everyone its clickable
         * Add our sprite to game world
         */
        let sprite: Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        sprite.setAnchor(0.5);
        sprite.interactive = true;
        sprite.addChild(spriteText);
        this.add(sprite);
        

        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function which accepts our sprite
         */
        sprite.on('mouseup', this.spriteClick, sprite);
    }

    /**
     * Create our function to fire on button click
     */
    spriteClick(sprite) {

        console.log(this);

        /**
         * Create an empty array to hold our randomly generated hex color for our button
         */
        let arr:Array<number | string> = [];

        /**
         * Create a for loop that triggers 6 times
         */
        for(let i = 0; i < 6; i++) {
            /**
             * For each loop create a random number between 0, 9 using Lightning Maths
             */
            let ranNum = Lightning.Maths.rngInt(0, 9);

            /**
             * Push that random number to the array
             */
            arr.push(ranNum);
        }

        /**
         * Prefix our array of 6 numbers with 0x to tell the renderer that its a color code
         */
        arr.unshift('0x');

        /**
         * Define a variable called color and use javascripts array join functionality to just have a space between numbers instead of a comma
         */
        let color = arr.join("");

        /**
         * Set our sprites tint equal to the random color generated
         */
        this.tint = color;
    }
}