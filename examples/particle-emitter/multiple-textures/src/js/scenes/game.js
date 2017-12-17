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
        // generate a rectangle texture for the particle emitter
        var rect = Lightning.Geometry.Rect(3, 10).generateCanvasTexture();
        // generate a circle texture for the particle emitter
        var circle = Lightning.Geometry.Circle(8).generateCanvasTexture();
        // add both textures to the particle emitter
        this.particleEmitter.add(circle, rect);
        /**
         * -- OR --
         * this.particleEmitter.add(rectTexture);
         * this.particleEmitter.add(circleTexture);
         */
        // start the particle emitter (not passing any parameters will make it run indefinitely)
        this.particleEmitter.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
