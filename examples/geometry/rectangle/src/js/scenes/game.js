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
        /**
         * Create our shape using Lightning Geometry Square function
         * Inside our function pass our dimension, tint, and alpha
         */
        var shape = Lightning.Geometry.Rect(100, 50, 0xffffff, 1);
        //Create a texture from our Geometry shape.
        var texture = this.game.generateTexture(shape);
        /**
         * Create our sprite from our texture
         * Set sprite x and y positions  to game center
         * Add sprite to our game world
         */
        var sprite = new Lightning.Sprite(this.game.texture(texture));
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        this.add(sprite);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
