export default class GameScene extends Lightning.Scene {

    public create() {
        /**
         * Create our variable to hold the audio
         * Create our audio using Lightning built in this.game.audio.load
         * Pass our key string for the audio
         * Pass our array of files to load
         * Set autoplay to false
         * Set loop to true
         * Set volumn to 1
         */
        let backgroundAudio = this.game.audio.load('background', ['/assets/audio.mp3'], false, true, 1);

        /**
         * Call the play function on our audio variable.
         */
        backgroundAudio.play();
    }
}