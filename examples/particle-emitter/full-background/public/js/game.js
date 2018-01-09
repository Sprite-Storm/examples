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
var width = 1024;
var height = 768;
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
        this.game.backgroundColor = 0x551A8B;
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
        var text = new Lightning.Text('Click to add more particles', { fill: 0xffffff });
        text.x = this.game.center.x;
        text.y = 100;
        text.anchor.x = 0.5;
        text.anchor.y = 0.5;
        this.add(text);
        // create new particle emitter
        this.particleEmitter = new Lightning.ParticleEmitter(this, 0, 0);
        this.particleEmitter.setSpread(0, this.game.width, 0, this.game.height);
        this.particleEmitter.setVelocityRange(-0.5, 0.5, -0.5, 0.5);
        this.particleEmitter.setRotationRange(-3.5, 3.5);
        this.particleEmitter.setRotationIncrement(-0.1, 0.1);
        this.particleEmitter.setAlphaIncrement(-0.002);
        this.particleEmitter.addToLocal = false;
        this.particleEmitter.setInterval(30);
        this.particleEmitter.setStrength(3);
        this.particleEmitter.setGravity(0, 0);
        // add the particle emitter to this stage
        this.add(this.particleEmitter);
        // make a new texture from the geomerty class
        var texture1 = Lightning.Geometry.Rect(2, 2, 0xFC4349, 0.3)['generateTexture']();
        var texture2 = Lightning.Geometry.Rect(2, 2, 0x6DBCDB, 0.4)['generateTexture']();
        var texture3 = Lightning.Geometry.Rect(5, 2, 0xFFFFFF, 0.4)['generateTexture']();
        // add that texture to the particle emitter
        this.particleEmitter.add(texture1, texture2, texture3);
        // start the particle emitter (not passing any parameters will make it run indefinitly)
        this.particleEmitter.start();
        var hitbox = new Lightning.Sprite(Lightning.Geometry.Rect(this.game.width, this.game.height, 0x000, 0)['generateTexture']());
        this.add(hitbox);
        hitbox.interactive = true;
        hitbox.on('mousedown', this.disperse, this);
    };
    GameScene.prototype.disperse = function (e) {
        var x = e.data.global.x;
        var y = e.data.global.y;
        this.particleEmitter.stop();
        this.particleEmitter.x = x;
        this.particleEmitter.y = y;
        this.particleEmitter.setSpread(-25, 25, -25, 25);
        this.particleEmitter.setInterval(0);
        this.particleEmitter.setStrength(50);
        this.particleEmitter.fireEmitter();
        this.particleEmitter.setSpread(0, this.game.width, 0, this.game.height);
        this.particleEmitter.setInterval(30);
        this.particleEmitter.setStrength(3);
        this.particleEmitter.x = 0;
        this.particleEmitter.y = 0;
        this.particleEmitter.start();
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
