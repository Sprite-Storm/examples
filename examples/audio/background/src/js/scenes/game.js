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
         * Create our variable to hold the audio
         * Create our audio using Lightning built in this.game.audio.load
         * Pass our key string for the audio
         * Pass our array of files to load
         * Set autoplay to false
         * Set loop to true
         * Set volumn to 1
         */
        var backgroundAudio = this.game.audio.load('background', ['/assets/audio.mp3'], false, true, 1);
        /**
         * Call the play function on our audio variable.
         */
        backgroundAudio.play();
    };
    return GameScene;
}(Lightning.Scene));
exports.default = GameScene;
