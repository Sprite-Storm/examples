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
var GameState = (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameState.prototype.create = function () {
        // infinite looping
        var cube = new Lightning.Sprite(Lightning.Geometry.Square(50, 0xff2200));
        this.add(cube);
        var tween = this.game.tweens.create(cube);
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);
        tween.loops = -1;
        tween.start();
        setTimeout(function () {
            tween.pause(true);
        }, 1000);
        setTimeout(function () {
            tween.pause(false);
        }, 2000);
    };
    return GameState;
}(Lightning.Scene));
exports.default = GameState;
