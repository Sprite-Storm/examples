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
        /**
         * Create our shape using Lightning Geometry Square function
         * Inside our function pass our dimension, tint, and alpha
         */
        var shape = Lightning.Geometry.Square(100, 0xffffff, 1);
        //Create a texture from our Geometry shape.
        var texture = this.game.generateTexture(shape);
        /**
         * Create our sprite from our texture
         * Set sprite x and y positions
         * Set our sprites x and y anchor to center
         * Add sprite to our game world
         */
        this._sprite = new Lightning.Sprite(this.game.texture(texture));
        this._sprite.x = this.game.width * 0.1;
        this._sprite.y = this.game.height * 0.3;
        this._sprite.setAnchor(0.5);
        this.add(this._sprite);
        /**
         * Create text to append to our second sprite that is draggable
         * Set text anchor x and y to center
         */
        var spriteText = new Lightning.Text('Drag Me!', { fontSize: 24, fill: 0xffffff });
        spriteText.anchor.x = 0.5;
        spriteText.anchor.y = 0.5;
        /**
         * Create our second sprite from our texture
         * Set sprite x and y positions to random positions between 0 and width/height minus a margin so it doesnt appear offscreen
         * Set our sprites tint to red
         * Set our sprites x and y anchor to center
         * Set our sprite to be interactive
         * Enable drag on our sprite
         * Add text child to sprite
         * Add sprite to our game world
         */
        this._sprite2 = new Lightning.Sprite(this.game.texture(texture));
        this._sprite2.x = Lightning.Maths.rngInt(0, this.game.width - 100);
        this._sprite2.y = Lightning.Maths.rngInt(0, this.game.height - 300);
        this._sprite2.tint = 0xff0000;
        this._sprite2.setAnchor(0.5);
        this._sprite2.interactive = true;
        this._sprite2.enableDrag();
        this._sprite2.addChild(spriteText);
        this.add(this._sprite2);
        /**
         * Create text to show our distance between two sprites
         * Set x and y positions of our distance text
         * Add distance text to our world
         */
        this._distanceText = new Lightning.Text('Distance: ' + this._distanceBetween + 'px', { fontSize: 24, fill: 0xffffff });
        this._distanceText.x = this.game.width * 0.5;
        this._distanceText.y = this.game.height * 0.1;
        this.add(this._distanceText);
    };
    GameScene.prototype.update = function () {
        /**
         * Update our distance between number on every tick of update loop using our distanceBetween function
         * Pass in the two objects we want to check the distance between in our case our two sprites
         */
        this._distanceBetween = Lightning.Maths.distanceBetween(this._sprite, this._sprite2);
        /**
         * Update our distance text per update frame to update the text while dragging our second sprite.
         */
        this._distanceText.text = 'Distance: ' + this._distanceBetween + ' px';
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
