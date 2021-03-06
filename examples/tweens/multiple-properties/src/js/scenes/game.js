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
    GameScene.prototype.create = function () {
        // create a sample cube
        var cube = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        this.add(cube);
        // create a basic tween
        var tween = this.game.tweens.create(cube);
        // from, to, time, property, easing, delay
        // tween the x position
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);
        // tween the y position
        tween.createAnim(0, 250, 500, 'y', Lightning.Easing.SineInOut);
        // tween the alpha
        tween.createAnim(1, 0.4, 300, 'alpha', Lightning.Easing.ElasticIn);
        // start the tween here
        tween.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
