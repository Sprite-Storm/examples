export default class GameScene extends Lightning.Scene {

    public create() {
        /**
         * Create our shape using Lightning Geometry Circle function
         * Inside our function pass our radius, tint, and alpha
         */
        let shape:Lightning.Geometry =  Lightning.Geometry.Circle(50, 0xffffff, 1);

        //Create a texture from our Geometry shape.
        let texture:Lightning.Texture = this.game.generateTexture(shape);
        
        /**
         * Create our sprite from our texture
         * Set sprite x and y positions  to game center
         * Add sprite to our game world
         */
        let sprite:Lightning.Sprite = new Lightning.Sprite(this.game.texture(texture));
            sprite.x = this.game.center.x;
            sprite.y = this.game.center.y;
            this.add(sprite);
    }
}