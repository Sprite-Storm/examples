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
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y / 2);
        // add the particle emitter to this stage
        this.add(this.particleEmitter);
        // make a new shape and texture
        var texture = Lightning.Geometry.Circle(5).generateCanvasTexture();
        // add that texture to the particle emitter
        this.particleEmitter.add(texture);
        // We will create 50 new particles on every emit
        this.particleEmitter.setStrength(50);
        // enable the debug module
        this.particleEmitter.enableDebug();
        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
