/**
 * Created by USER on 08.05.2015.
 */
(function () {
    function Sprite(url, pos, size, speed, frames, dir, once) {
        this.pos = pos;
        this.url = url;
        this.size = size;
        this.speed = typeof speed === "number" ? speed : 0;
        this.frames = frames;
        this.dir = dir || "horizontal";
        this.once = once;
        this._index = 0;
    }

    Sprite.prototype.update = function (dt) {
        this._index += this.speed * dt;
    };
    Sprite.prototype.render = function (ctx) {
        var frame;
        if (this.speed > 0) {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }
        var x = this.pos[0];
        var y = this.pos[1];

        if (this.dir == "vertical") {
            y += frame * this.size[1];
        } else {
            x += frame * this.size[0];
        }

        ctx.drawImage(resources.get(this.url), x, y, this.size[0], this.size[1], 0, 0, this.size[0], this.size[1]);
    };
    window.Sprite = Sprite;
})();