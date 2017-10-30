"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boot_1 = require("./states/boot");
var preload_1 = require("./states/preload");
var game_1 = require("./states/game");
var Game = (function () {
    function Game(width, height, divId) {
        if (width === void 0) { width = 500; }
        if (height === void 0) { height = 500; }
        if (divId === void 0) { divId = 'app'; }
        this.game = new Lightning.Engine(width, height, {
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
var width = window.innerWidth;
var height = width * 0.7;
window.onload = function () {
    new Game(width, height);
};
