(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boot_1 = require("./scenes/boot");
var preload_1 = require("./scenes/preload");
var game_1 = require("./scenes/game");
var Game = (function () {
    function Game(width, height) {
        if (width === void 0) { width = 500; }
        if (height === void 0) { height = 500; }
        this.game = new Lightning.Engine(width, height, {
            divID: 'app-container',
            rendererOptions: {
                transparent: false
            }
        });
        this.game.scenes.add('boot', new boot_1.default());
        this.game.scenes.add('preload', new preload_1.default());
        this.game.scenes.add('game', new game_1.default());
        this.game.scenes.start('boot');
    }
    return Game;
}());
exports.default = Game;
var div = document.getElementById('app-container');
var width = div.offsetWidth;
var height = width * 0.7;
window.onload = function () {
    new Game(width, height);
};

},{"./scenes/boot":2,"./scenes/game":3,"./scenes/preload":4}],2:[function(require,module,exports){
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
var BootScene = (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootScene.prototype.init = function (params) {
        this.game.backgroundColor = 0x431DBD;
        this.create();
    };
    BootScene.prototype.create = function () {
        this.game.scenes.start('preload');
        this.game.scenes.destroy('boot');
    };
    return BootScene;
}(Lightning.Scene));
exports.default = BootScene;

},{}],3:[function(require,module,exports){
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
         * Set autoplay to true
         * Set looping to true
         * Set our volumn to 1
         */
        this.game.audio.load('background', ['/assets/audio.mp3'], true, true, 1);
        /**
         * Set global is playing boolean to true since we set autoplay to true and our sound is playing
         */
        this._isPlaying = true;
        /**
         * Create our text for our button
         * Set text x and y anchor to 0.5
         */
        var buttonText = new Lightning.Text('Pause!', { fontSize: 24 });
        buttonText.anchor.x = 0.5;
        buttonText.anchor.y = 0.5;
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
        button.addChild(buttonText);
        this.add(button);
        /**
         * Create an on mouse down function
         * Pass our button click function inside our lexical function
         * We pass two variables to our function, the button, and the button text
         */
        button.on('mousedown', function () {
            _this.btnClick(button, buttonText);
        });
    };
    /**
     * Create our function to fire on button click
     *
     */
    GameScene.prototype.btnClick = function (button, buttonText) {
        /**
         * Create if statement to trigger if our is playing boolean is true when button is clicked
         * Pause our game sound with key we pass from the creation of the audio
         * Change the tint of our button to show it has been clicked to pause
         * Change our text from 'Pause!' to 'Unpause!'
         * Set our is playing boolean to false since it has now been muted
         *
         * Else If statement to trigger if our is playing boolean is false when button is clicked
         * Unpause our game sound with key we pass from the creation of the audio
         * Change the tint of our button to show it has been clicked to pause
         * Change our text from 'Unpause!' back to 'Pause!'
         * Set our is playing boolean back to true since the game audio has now been unmuted.
         */
        if (this._isPlaying == true) {
            this.game.audio.sound('background').pause();
            button.tint = 0xff0000;
            buttonText.text = 'Unpause!';
            this._isPlaying = false;
        }
        else if (this._isPlaying == false) {
            button.tint = 0xffffff;
            buttonText.text = 'Pause!';
            this.game.audio.sound('background').play();
            this._isPlaying = true;
        }
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;

},{}],4:[function(require,module,exports){
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
var PreloadScene = (function (_super) {
    __extends(PreloadScene, _super);
    function PreloadScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreloadScene.prototype.init = function () {
        this.create();
    };
    PreloadScene.prototype.preload = function () {
        // this.loader.load();
    };
    PreloadScene.prototype.preloadComplete = function () {
        // console.log('preload complete')
    };
    PreloadScene.prototype.create = function () {
        this.game.scenes.start('game');
        this.game.scenes.destroy('preload');
    };
    return PreloadScene;
}(Lightning.Scene));
exports.default = PreloadScene;

},{}]},{},[1]);
