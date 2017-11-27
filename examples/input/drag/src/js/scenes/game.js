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
         * Create text to append to our sprite that is draggable
         * Set text anchor x and y to center
         */
        var spriteText = new Lightning.Text('Drag Me!', { fontSize: 24, fill: 0x000000 });
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;
        /**
         * Create our sprite
         * Set our x and y positions for game center
         * Set our sprites anchor to 0.5 which is center of the sprite
         * Call Lightnings built in enable drag function on our sprite
         * Add out text to our sprite to tell everyone its draggable
         * Add our sprite to game world
         */
        var sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        sprite.setAnchor(0.5);
        sprite.enableDrag();
        sprite.addChild(spriteText);
        this.add(sprite);
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
