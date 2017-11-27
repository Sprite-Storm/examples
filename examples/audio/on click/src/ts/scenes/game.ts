export default class GameScene extends Lightning.Scene {

    public create() {

        /**
         * Load our game audio
         * Pass our key string for our sound
         * Pass an array of sounds we wish to load from the directory we have them saved to
         * Set autoplay to false
         * Set looping to false
         * Set our volumn to 1
         */
        this.game.audio.load('boom', ['/assets/boom.wav'], false, false, 1);

        /**
         * Create our text for our button
         * Set text x and y anchor to 0.5
         */
        let text:Lightning.Text = new Lightning.Text('Click Me!', <any>{fontSize: 24});
        text.anchor.x = 0.5;
        text.anchor.y = 0.5;


        /**
         * Create our geometry shape for our button
         */
        let shape: Lightning.Geometry = Lightning.Geometry.RoundRect(200, 100, 20, 0xffffff, 1);

        /**
         * Create a texture from our shape
         */
        let texture: Lightning.Texture = this.game.generateTexture(shape);

        /**
         * Create our button sprite from our texture passing game context and texture
         * Set our buttons x and y anchor to 0.5
         * Set our buttons x and y position to game center
         * Add text as a child to our button sprite
         * Add button to game world
         */
        let button: Lightning.Button = new Lightning.Button(this.game, texture);
        button.setAnchor(0.5);
        button.x = this.game.center.x;
        button.y = this.game.center.y;
        button.addChild(text);
        this.add(button);

        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function
         */
        button.on('mousedown', () => {
            this.btnClick();
        })
        
    }

    /**
     * Create our function to fire on button click
     * Play our sound when function is fired
     */
    private btnClick() {
            this.game.audio.sound('boom').play();
    }
}