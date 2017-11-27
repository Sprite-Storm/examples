export default class GameScene extends Lightning.Scene {
    
    protected particleEmitter:Lightning.ParticleEmitter

    create() {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y);

        // add the particle emitter to this stage
        this.add(this.particleEmitter);

        // generate a texture for the particle emitter
        let texture = <Lightning.Texture>Lightning.Geometry.Rect(8, 8, 0xffffff, 1, true);

        // add that texture to the particle emitter
        this.particleEmitter.add(texture);

        // set the alpha incrementor range from -0.01, to -0.03
        this.particleEmitter.setAlphaIncrement(-0.01, -0.03);


        // adjust the gravity and velocity range for this demo (not nesessary)
        this.particleEmitter.setGravity(0, 0);
        this.particleEmitter.setVelocityRange(-3, 3, -3, 3);

        // // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    }
}