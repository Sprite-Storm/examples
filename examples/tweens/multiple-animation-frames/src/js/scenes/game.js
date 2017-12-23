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
        var tween = this.game.tweens.create(cube);
        // use frames for importing static animations
        tween.importAnim('y', [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        tween.importAnim('x', [25, 30, 35, 45, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        // start the tween
        tween.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
