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
