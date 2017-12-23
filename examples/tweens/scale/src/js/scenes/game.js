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
        // as sprites are anchored 0, 0 by default, scale tweens can look weird, so lets set the anchor to the center of the 
        // sprite to begin with.
        cube.setAnchor(0.5);
        cube.x = 100;
        cube.y = 100;
        this.add(cube);
        var tween = this.game.tweens.create(cube.scale);
        // use values to be applied to the y property
        tween.createAnim(1, 0, 500, 'x', Lightning.Easing.BounceInOut);
        tween.createAnim(1, 0, 500, 'y', Lightning.Easing.BounceInOut);
        // start the first tween now
        tween.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
