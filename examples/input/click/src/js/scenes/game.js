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
        //Define graphics
        var graphics = Lightning.Geometry.Square(100, 0xffffff);
        //Create a texture from our graphics opject
        var texture = graphics.generateCanvasTexture();
        /**
         * Create text to append to our sprite that is draggable
         * Set text anchor x and y to center
         */
        var spriteText = new Lightning.Text('Click Me!', { fontSize: 24, fill: 0x000000
        });
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;
        /**
         * Create our sprite
         * Set our x and y positions for game center
         * Set our sprites anchor to 0.5 which is center of the sprite
         * Add out text to our sprite to tell everyone its clickable
         * Add our sprite to game world
         */
        var sprite = new Lightning.Sprite(texture);
        sprite.x = this.game.center.x;
        sprite.y = this.game.center.y;
        sprite.setAnchor(0.5);
        sprite.interactive = true;
        sprite.addChild(spriteText);
        this.add(sprite);
        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function which accepts our sprite
         */
        sprite.on('mouseup', function () {
            _this.spriteClick(sprite);
        });
    };
    /**
     * Create our function to fire on button click
     */
    GameScene.prototype.spriteClick = function (sprite) {
        /**
         * Create an empty array to hold our randomly generated hex color for our button
         */
        var arr = [];
        /**
         * Create a for loop that triggers 6 times
         */
        for (var i = 0; i < 6; i++) {
            /**
             * For each loop create a random number between 0, 9 using Lightning Maths
             */
            var ranNum = Lightning.Maths.rngInt(0, 9);
            /**
             * Push that random number to the array
             */
            arr.push(ranNum);
        }
        /**
         * Prefix our array of 6 numbers with 0x to tell the renderer that its a color code
         */
        arr.unshift('0x');
        /**
         * Define a variable called color and use javascripts array join functionality to just have a space between numbers instead of a comma
         */
        var color = arr.join("");
        /**
         * Set our sprites tint equal to the random color generated
         */
        sprite.tint = color;
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
