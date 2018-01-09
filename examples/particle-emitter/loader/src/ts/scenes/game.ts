export default class GameScene extends Lightning.Scene {

    protected particleEmitter:Lightning.ParticleEmitter;

    init() {
        this.create();
    }
    
    create() {
        this.particleEmitter = new Lightning.ParticleEmitter(this, 0, 0);
        this.add(this.particleEmitter);

        // create new particle emitter
        let texture1:Lightning.Texture = Lightning.Geometry.Rect(2, 2, 0xFC4349, 0.5)['generateTexture']();
        let texture2:Lightning.Texture = Lightning.Geometry.Rect(2, 2, 0x6DBCDB, 1)['generateTexture']();
        let texture3:Lightning.Texture = Lightning.Geometry.Rect(5, 2, 0xFFFFFF, 1)['generateTexture']();

        // add that texture to the particle emitter
        this.particleEmitter.add(texture1, texture3, texture2);

        this.particleEmitter.x = this.game.center.x;
        this.particleEmitter.y = this.game.center.y;

        this.particleEmitter.addToLocal = false;
        
        this.particleEmitter.setGravity(0, 0);
        this.particleEmitter.setVelocityRange(-0.3, 0.3, -0.3, 0.3);
        this.particleEmitter.setSpread(-5, 5, -5, 5);
        this.particleEmitter.setScaleRange(0.4, 1.5, 0.4, 1.5);
        this.particleEmitter.setAlphaRange(0.5, 0.8);
        this.particleEmitter.setAlphaIncrement(-0.008);
        this.particleEmitter.setInterval(5);
        
        this.particleEmitter.setRotationIncrement(-0.1, 0.1);
        this.particleEmitter.setStrength(3);
        this.particleEmitter.start();

        let data = Lightning.Maths.pointsOfCircle(this.game.center.x, this.game.center.y, 100, 100);

        let tween = this.game.tweens.create(this.particleEmitter);
        tween.importAnim('x', data.x);
        tween.importAnim('y', data.y);
        
        let tween2 = this.game.tweens.create(this.particleEmitter);
        tween2.createAnim(this.game.width, 0, 4000, 'x', Lightning.Easing.linear);

        tween.chain(tween2);
        tween2.chain(tween);
        tween.loops = -1;
        tween.start();
    }
}