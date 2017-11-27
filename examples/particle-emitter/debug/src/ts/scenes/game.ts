export default class GameScene extends Lightning.Scene {

    protected particleEmitter:Lightning.ParticleEmitter
    
    create() {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y / 2);

        // add the particle emitter to this stage
        this.add(this.particleEmitter);

        // make a new shape and texture
        let texture:Lightning.Texture = this.game.texture(Lightning.Geometry.Circle(5));

        // add that texture to the particle emitter
        this.particleEmitter.add(texture);

        // We will create 50 new particles on every emit
        this.particleEmitter.setStrength(50);

        // enable the debug module
        this.particleEmitter.enableDebug();

        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    }
}