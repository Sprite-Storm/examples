export default class GameScene extends Lightning.Scene {

    protected particleEmitter:Lightning.ParticleEmitter
    
    create() {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y);

        // add the particle emitter to this stage
        this.add(this.particleEmitter);

        // make a new texture from the geomerty class
        let texture = Lightning.Geometry.Circle(5).generateCanvasTexture();

        // add that texture to the particle emitter
        this.particleEmitter.add(texture);

        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    }
}