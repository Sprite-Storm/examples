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
        /**
         * Load our game audio
         * Pass our key string for our sound
         * Pass an array of sounds we wish to load from the directory we have them saved to
         * Set autoplay to false
         * Set looping to false
         * Set our volumn to 1
         */
        this.game.audio.load('boom', ['/assets/boom.wav'], false, false, 1);
        /**
         * Create our text for our button
         * Set text x and y anchor to 0.5
         */
        var text = new Lightning.Text('Click Me!', { fontSize: 24 });
        text.anchor.x = 0.5;
        text.anchor.y = 0.5;
        /**
         * Create our geometry shape for our button
         */
        var shape = Lightning.Geometry.RoundRect(200, 100, 20, 0xffffff, 1);
        /**
         * Create a texture from our shape
         */
        var texture = this.game.generateTexture(shape);
        /**
         * Create our button sprite from our texture passing game context and texture
         * Set our buttons x and y anchor to 0.5
         * Set our buttons x and y position to game center
         * Add text as a child to our button sprite
         * Add button to game world
         */
        var button = new Lightning.Button(this.game, texture);
        button.setAnchor(0.5);
        button.x = this.game.center.x;
        button.y = this.game.center.y;
        button.addChild(text);
        this.add(button);
        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function
         */
        button.on('mousedown', function () {
            _this.btnClick();
        });
    };
    /**
     * Create our function to fire on button click
     * Play our sound when function is fired
     */
    GameScene.prototype.btnClick = function () {
        this.game.audio.sound('boom').play();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
