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
        //Define graphics
        var graphics = Lightning.Geometry.Square(100, 0xffffff);
        //Create a texture from our graphics opject
        var texture = graphics.generateCanvasTexture();
        //Create sprite from our texture and set our x and y positions
        var sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        //Create our second sprite from our texture and set our x and y positions
        var sprite2 = new Lightning.Sprite(texture);
        sprite2.x = this.game.center.x * 0.7;
        sprite2.y = this.game.center.y;
        //Set our scale of our second sprite to twice its original size.
        sprite2.setScale(2);
        //Add our First to our game world.
        this.add(sprite);
        //Add our Second to our game world.
        this.add(sprite2);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
