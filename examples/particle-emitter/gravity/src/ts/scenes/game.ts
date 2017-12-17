export default class GameScene extends Lightning.Scene {
        
    protected particleEmitter:Lightning.ParticleEmitter
    
    create() {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.width * 0.75, this.game.center.y);

        // add the particle emitter to this stage
        this.add(this.particleEmitter);

        // make a new shape and texture
        let texture:Lightning.Texture = Lightning.Geometry.Circle(5).generateCanvasTexture();

        // add that texture to the particle emitter
        this.particleEmitter.add(texture);

        // Set the gravity to drag left and down
        this.particleEmitter.setGravity(-0.2, 0.2);

        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    }
}