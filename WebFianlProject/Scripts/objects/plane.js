/**
    Game Name: Car Crash
    Name: Zifeng Xu
    Last Modify by: Zifeng
    Date Last Modified: 2014, Nov.15th
    Description: This is a car crash game. Hit the rasberry to earn 100 points. Hit the bomb will lose one live.
    Rivision History: see https://github.com/ZifengX/FinalProject.git
**/
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // plane Class
    var Plane = (function () {
        function Plane(stage, game) {
            this.onStage = true;
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "plane2");
            this.image.y = 600;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Plane.prototype.update = function () {
            this.image.x = this.stage.mouseX;
        };
        Plane.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Plane;
    })();
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map