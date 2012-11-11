(function(window) {

    var brush = function(canvasSel) {
        var ctx = $(canvasSel).get(0).getContext("2d");
        return {
            rect: function(obj, noFill) {
                ctx.beginPath();
                ctx.rect(obj["\ufdd0'x"], obj["\ufdd0'y"], obj["\ufdd0'w"], obj["\ufdd0'h"]);
                ctx.closePath();
                if(!noFill) {
                    ctx.fill();
                }
                return this;
            },

            circle: function(obj, noFill) {
                ctx.beginPath();
                ctx.arc(obj["\ufdd0'x"], obj["\ufdd0'y"], obj["\ufdd0'r"], 0, Math.PI * 2, true);
                ctx.closePath();
                if(!noFill) {
                    ctx.fill();
                }
            },

            halfCircle: function(obj, dir, noFill) {
                ctx.beginPath();
                ctx.arc(obj["\ufdd0'x"], obj["\ufdd0'y"], obj["\ufdd0'r"], dir * Math.PI/2, dir * Math.PI * 1.5, true);
                if(!noFill) {
                    ctx.fill();
                }
            },

            rotateDeg: function(deg) {
                ctx.rotate(deg * Math.PI / 180);
                return this;
            },

            fillStyle: function(s) {
                ctx.fillStyle = s;
                return this;
            },

            strokeStyle: function(s) {
                ctx.strokeStyle = s;
                return this;
            },

            stroke: function(w) {
                ctx.lineWidth = w;
                ctx.stroke();
                return this;
            },

            font: function(font) {
                ctx.font = font;
                return this;
            },

            text: function(obj, text) {
                ctx.fillText(text, obj["\ufdd0'x"], obj["\ufdd0'y"]);
                return this;
            },

            opacity: function(op) {
                ctx.globalAlpha = op;
                return this;
            },

            clearRect: function(obj) {
                ctx.clearRect(0,0,obj["\ufdd0'w"],obj["\ufdd0'h"]);
                return this;
            },

            rotate: function(amount) {
                ctx.rotate(amount);
                return this;
            },

          	image: function(img, obj) {
              ctx.drawImage(img, obj["\ufdd0'x"], obj["\ufdd0'y"]);
              return this;
          	},

          	clippedImage: function(img, x, y, w, h, obj) {
              ctx.drawImage(img, x, y, w, h, obj["\ufdd0'x"], obj["\ufdd0'y"], w, h);
              return this;
          	},

            translate: function(obj) {
                ctx.translate(obj["\ufdd0'x"], obj["\ufdd0'y"]);
                return this;
            },

            save: function() {
                ctx.save();
                return this;
            },

            restore: function() {
                ctx.restore();
                return this;
            }
        };
    };

    window.brush = brush;

})(window);

