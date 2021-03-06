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
        var _this = this;
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, this.game.center.x, this.game.center.y);
        // add the particle emitter to this stage
        this.add(this.particleEmitter);
        // make a new texture from the geomerty class
        var texture = Lightning.Geometry.Circle(5).generateCanvasTexture();
        // add that texture to the particle emitter
        this.particleEmitter.add(texture);
        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
        // destroy the particle emitter after 2500ms
        setTimeout(function () {
            _this.particleEmitter.destroy();
        }, 2500);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
