export default class GameScene extends Lightning.Scene {

    public create() {

        /**
         * Create our text using Lightnings built in Text
         * Pass our string of text
         * Pass a simple object to set fontSize as well as fill
         */
        let text:Lightning.Text = new Lightning.Text("Play!", {fontSize: '128px', fill: '#ffffff'});

        /**
         * Set our x and y positions to game center
         * Add our text to the game world.
         */
        text.x = this.game.center.x;
        text.y = this.game.center.y;
        this.add(text);
    }
}