"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScene.prototype.create = function () {
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y);
        // add the particle emitter to this stage
        this.add(this.particleEmitter);
        // generate a texture for the particle emitter
        var texture = Lightning.Geometry.Triangle(15, 15).generateCanvasTexture();
        // add that texture to the particle emitter
        this.particleEmitter.add(texture);
        // set the velocity ranges from -0.05 to 0.05 for both x and y velocities
        this.particleEmitter.setVelocityRange(-0.05, 0.05, -0.05, 0.05);
        // adjust the gravity and velocity range for this demo (not nesessary)
        this.particleEmitter.setGravity(0, 0);
        this.particleEmitter.setVelocityRange(-3, 3, -3, 3);
        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
