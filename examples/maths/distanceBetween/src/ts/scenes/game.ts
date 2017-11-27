export default class GameScene extends Lightning.Scene {

    /**
     * Set global variables to house our distance between number, text, and sprites
     */
    private _distanceBetween: number;
    private _distanceText: Lightning.Text;
    private _sprite: Lightning.Sprite
    private _sprite2: Lightning.Sprite

    public create() {
        /**
         * Create our shape using Lightning Geometry Square function
         * Inside our function pass our dimension, tint, and alpha
         */
        let shape: Lightning.Geometry = Lightning.Geometry.Square(100, 0xffffff, 1);

        //Create a texture from our Geometry shape.
        let texture: Lightning.Texture = this.game.generateTexture(shape);

        /**
         * Create our sprite from our texture
         * Set sprite x and y positions 
         * Set our sprites x and y anchor to center
         * Add sprite to our game world
         */
        this._sprite = new Lightning.Sprite(this.game.texture(texture));
        this._sprite.x = this.game.width * 0.1;
        this._sprite.y = this.game.height * 0.3;
        this._sprite.setAnchor(0.5);
        this.add(this._sprite);

        /**
         * Create text to append to our second sprite that is draggable
         * Set text anchor x and y to center
         */
        let spriteText: Lightning.Text = new Lightning.Text('Drag Me!', <any>{ fontSize: 24, fill: 0xffffff});
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;

        /**
         * Create our second sprite from our texture
         * Set sprite x and y positions to random positions between 0 and width/height minus a margin so it doesnt appear offscreen
         * Set our sprites tint to red
         * Set our sprites x and y anchor to center
         * Set our sprite to be interactive
         * Enable drag on our sprite 
         * Add text child to sprite
         * Add sprite to our game world
         */
        this._sprite2 = new Lightning.Sprite(this.game.texture(texture));
        this._sprite2.x = Lightning.Maths.rngInt(0, this.game.width - 100);
        this._sprite2.y = Lightning.Maths.rngInt(0, this.game.height - 300)
        this._sprite2.tint = 0xff0000;
        this._sprite2.setAnchor(0.5);
        this._sprite2.interactive = true;
        this._sprite2.enableDrag();
        this._sprite2.addChild(spriteText);
        this.add(this._sprite2);

        /**
         * Create text to show our distance between two sprites
         * Set x and y positions of our distance text
         * Add distance text to our world
         */
        this._distanceText = new Lightning.Text('Distance: ' + this._distanceBetween + 'px', <any>{ fontSize: 24, fill: 0xffffff });
        this._distanceText.x = this.game.width * 0.5;
        this._distanceText.y = this.game.height * 0.1;
        this.add(this._distanceText);

    }

    update() {
        /**
         * Update our distance between number on every tick of update loop using our distanceBetween function 
         * Pass in the two objects we want to check the distance between in our case our two sprites
         */
        this._distanceBetween = Lightning.Maths.distanceBetween(this._sprite, this._sprite2);

        /**
         * Update our distance text per update frame to update the text while dragging our second sprite.
         */
        this._distanceText.text = 'Distance: ' + this._distanceBetween + ' px';

    }
}