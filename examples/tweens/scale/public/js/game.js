(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boot_1 = require("./scenes/boot");
var preload_1 = require("./scenes/preload");
var game_1 = require("./scenes/game");
var Game = /** @class */ (function () {
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
var BootScene = /** @class */ (function (_super) {
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
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameScene.prototype.create = function () {
        // create a sample cube
        var cube = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200)['generateTexture']());
        // as sprites are anchored 0, 0 by default, scale tweens can look weird, so lets set the anchor to the center of the 
        // sprite to begin with.
        cube.setAnchor(0.5);
        cube.x = 100;
        cube.y = 100;
        this.add(cube);
        var tween = this.game.tweens.create(cube.scale);
        // use values to be applied to the y property
        tween.createAnim(1, 0, 500, 'x', Lightning.Easing.BounceInOut);
        tween.createAnim(1, 0, 500, 'y', Lightning.Easing.BounceInOut);
        // start the first tween now
        tween.start();
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
var PreloadScene = /** @class */ (function (_super) {
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
