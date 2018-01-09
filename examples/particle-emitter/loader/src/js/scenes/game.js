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
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScene.prototype.init = function () {
        this.create();
    };
    GameScene.prototype.create = function () {
        this.particleEmitter = new Lightning.ParticleEmitter(this, 0, 0);
        this.add(this.particleEmitter);
        // create new particle emitter
        var texture1 = Lightning.Geometry.Rect(2, 2, 0xFC4349, 0.5)['generateTexture']();
        var texture2 = Lightning.Geometry.Rect(2, 2, 0x6DBCDB, 1)['generateTexture']();
        var texture3 = Lightning.Geometry.Rect(5, 2, 0xFFFFFF, 1)['generateTexture']();
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
        var data = Lightning.Maths.pointsOfCircle(this.game.center.x, this.game.center.y, 100, 100);
        var tween = this.game.tweens.create(this.particleEmitter);
        tween.importAnim('x', data.x);
        tween.importAnim('y', data.y);
        var tween2 = this.game.tweens.create(this.particleEmitter);
        tween2.createAnim(this.game.width, 0, 4000, 'x', Lightning.Easing.linear);
        tween.chain(tween2);
        tween2.chain(tween);
        tween.loops = -1;
        tween.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
