export default class GameScene extends Lightning.Scene {

    /**
     * Define a global rate variable for our rate to  1.
     */
    private _rate:number = 1;

    public create() {
        /**
         * Load our game audio
         * Pass our key string for our sound
         * Pass an array of sounds we wish to load from the directory we have them saved to
         * Set autoplay to true
         * Set looping to true
         * Set our rate to our predefined rate variable which is set to 1
         */
        // this.game.audio.load('background', ['/assets/audio.mp3'], false, true, this._rate);
        let backgroundSound = this.game.audio.load('background', ['/assets/audio.mp3'], true, true, this._rate);

        /**
         * Create our text for our button
         * Set text x and y anchor to 0.5
         */
        let btnText:Lightning.Text = new Lightning.Text('Speed: 1', <any>{fontSize: 18});
        btnText.anchor.x = 0.5;
        btnText.anchor.y = 0.5;


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
        button.addChild(btnText);
        this.add(button);

        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function
         * We pass two variables to our button click function which are button, and btnText
         */
        button.on('mousedown', () => {
            this.btnClick(button, btnText);
        })
        
    }

    /**
     * Create our function to fire on button click which accepts button and btnText 
     * 
     */
    private btnClick(button, btnText) {
        /**
         * When the function is fired increase our rate vaiable by 0.5
         * Create our if statement, if our rate variable is larger than 1.5 then set the rate to 0.5
         */
        this._rate += 0.5;
        if(this._rate > 1.5) {
            this._rate = 0.5;
        }

        /**
         * Set our rate to the varibale above
         * Change button text to "Spped:" + whatever our rate is currently at
         */

        this.game.audio.sound('background').rate(this._rate);
        btnText.text = "Speed:" + this._rate;
    }
}