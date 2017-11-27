export default class GameScene extends Lightning.Scene {

    public create() {
        //Define graphics
        let graphics: Lightning.Graphics = Lightning.Geometry.Square(100, 0xffffff);

        //Create a texture from our graphics opject
        let texture: Lightning.Texture = graphics.generateCanvasTexture();

        /**
         * Create text to append to our sprite that is draggable
         * Set text anchor x and y to center
         */
        let spriteText: Lightning.Text = new Lightning.Text('Drag Me!', <any>{ fontSize: 24, fill: 0x000000});
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;

        /**
         * Create our sprite
         * Set our x and y positions for game center
         * Set our sprites anchor to 0.5 which is center of the sprite
         * Call Lightnings built in enable drag function on our sprite
         * Add out text to our sprite to tell everyone its draggable
         * Add our sprite to game world
         */
        let sprite: Lightning.Sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        sprite.setAnchor(0.5);
        sprite.enableDrag();
        sprite.addChild(spriteText);
        this.add(sprite);

    }
}