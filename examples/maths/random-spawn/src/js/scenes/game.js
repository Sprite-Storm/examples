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
        var text = new Lightning.Text('Refresh to change spawn.', { fontSize: 32, fill: 0xffffff });
        text.x = this.game.width * 0.5;
        text.y = this.game.height * 0.050;
        this.add(text);
        /**
         * Create our shape using Lightning Geometry Square function
         * Inside our function pass our dimension, tint, and alpha
         */
        var shape = Lightning.Geometry.Square(100, 0xffffff, 1);
        //Create a texture from our Geometry shape.
        var texture = this.game.generateTexture(shape);
        /**
         * Create our sprite from our texture
         */
        var sprite = new Lightning.Sprite(this.game.texture(texture));
        /**
         * Set our sprites x and y to random positions using Lightning Maths rngInt function
         * Set our from and to for random spawn area. In this case we use game width/height * 0.1 for a buffer and then game width/height * 0.5 to keep our sprite spawning in this area
         */
        sprite.x = Lightning.Maths.rngInt(this.game.width * 0.1, this.game.width * 0.5);
        sprite.y = Lightning.Maths.rngInt(this.game.height * 0.1, this.game.height * 0.5);
        /**
         * Set our sprite anchor x and y to 0.5
         * Add our sprite to the world
         */
        sprite.setAnchor(0.5);
        this.add(sprite);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
