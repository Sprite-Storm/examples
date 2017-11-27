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
        this.game.audio.load('background', ['/assets/audio.mp3'], true, true, 1);
        /**
         * Set our is faded boolean to false seeing as the audio has auto started and is not faded
         */
        this._isFaded = false;
        /**
         * Create our text for our button
         * Set text x and y anchor to 0.5
         */
        var btnText = new Lightning.Text('Click To Fade Out!', { fontSize: 18 });
        btnText.anchor.x = 0.5;
        btnText.anchor.y = 0.5;
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
        button.addChild(btnText);
        this.add(button);
        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function
         * We pass two variables to our button click function which are button, and btnText
         */
        button.on('mousedown', function () {
            _this.btnClick(button, btnText);
        });
    };
    /**
     * Create our function to fire on button click which accepts button and btnText
     *
     */
    GameScene.prototype.btnClick = function (button, btnText) {
        /**
         * If statement to check if our is faded boolean is false if it is continue
         * Set our button tint to red
         * Change our btnText text
         * Call our fade function on our sound with the key string of 'background' fade accepts three required params. Volumn from, Volumn to, and speed in MS
         * Set our is faded boolean to true
         *
         * Next we have our Else If is faded boolean is true if it is continue
         * Change our button tint to white
         * Change our btnText text
         * Call our fade function on our sound with the key string of 'background' changing the paramns to go from 0 to 1 at the same speed
         * Set our is faded boolean back to false
         */
        if (this._isFaded == false) {
            button.tint = 0xff0000;
            btnText.text = "Click Me To Fade In!";
            this.game.audio.sound('background').fade(1.0, 0.0, 1500);
            this._isFaded = true;
        }
        else if (this._isFaded == true) {
            button.tint = 0xffffff;
            ;
            btnText.text = "Click Me To Fade Out!";
            this.game.audio.sound('background').fade(0.0, 1.0, 1500);
            this._isFaded = false;
        }
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
