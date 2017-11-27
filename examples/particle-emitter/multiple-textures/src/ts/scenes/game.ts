export default class GameScene extends Lightning.Scene {

    protected particleEmitter:Lightning.ParticleEmitter
    
    create() {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y);

        // add the particle emitter to this stage
        this.add(this.particleEmitter);

        // generate a rectangle texture for the particle emitter
        let rect = Lightning.Geometry.Rect(3, 10);
        let rectTexture = this.game.texture(rect);

        // generate a circle texture for the particle emitter
        let circle = Lightning.Geometry.Circle(8);
        let circleTexture = this.game.texture(circle);

        // add both textures to the particle emitter
        this.particleEmitter.add(rectTexture, circleTexture);

        /**
         * -- OR --
         * this.particleEmitter.add(rectTexture);
         * this.particleEmitter.add(circleTexture);
         */

        // start the particle emitter (not passing any parameters will make it run indefinitely)
        this.particleEmitter.start();
    }
}