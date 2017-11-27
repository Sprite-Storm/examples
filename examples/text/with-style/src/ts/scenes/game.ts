export default class GameScene extends Lightning.Scene {

    public create() {

        let style:Lightning.iTextStyle = {
            align: 'center'
        }
        let text:Lightning.Text = new Lightning.Text("Play!");
            text.x = this.game.center.x;
            text.y = this.game.center.y;
            this.add(text);
    }
}