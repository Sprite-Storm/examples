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
        this.add(cube);
        // create a basic tween
        var tween = this.game.tweens.create(cube);
        // from, to, time, property, easing, delay
        tween.createAnim(0, 250, 500, 'x', Lightning.Easing.ExpoInOut);
        // subscribe to start event
        tween.subscribe('start', function () {
            console.log('tween started');
        });
        // subscribe to the tick event (gets called on every tween update)
        tween.subscribe('tick', function () {
            console.log('tween update');
        });
        // subscribe once to the complete event
        tween.subscribeOnce('complete', function () {
            console.log('tween completed');
        });
        /**
         * Full list of events:
         * start
         * pause
         * tick
         * loop
         * complete
         * reset
         * destroy
         */
        // start the regular tween here
        // tween.start();
        var tween2 = this.game.tweens.create(cube);
        // use frames for importing static animations
        tween2.importAnim('y', [50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        tween2.importAnim('x', [25, 30, 35, 45, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37]);
        // chain tween 1 with chain 2
        tween.chain(tween2);
        // start the first tween now
        tween.start();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
