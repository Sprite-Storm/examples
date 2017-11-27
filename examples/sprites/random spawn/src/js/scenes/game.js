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
        /**
         * Create some text at top of screen to state a refresh is needed to show a spawn change.
         */
        var text = new Lightning.Text('Refresh to change spawn', { fontSize: 32, fill: 0xffffff });
        text.x = this.game.center.x;
        text.y = this.game.height * 0.1;
        this.add(text);
        //Create sprite from our texture
        var sprite = new Lightning.Sprite(texture);
        /**
         * Set our sprites x and y positions to a random position using our Maths.rngInt functionality
         * In the rndInt function pass a FROM position and TO position in our case it will be 0 for both the x and y and then width/height * 0.5 which will be half the width/height of our game world.
         */
        sprite.x = Lightning.Maths.rngInt(0, this.game.width * 0.5);
        sprite.y = Lightning.Maths.rngInt(0, this.game.height * 0.5);
        //Add our Second to our game world.
        this.add(sprite);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
