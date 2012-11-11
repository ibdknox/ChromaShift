(function(window) {

    var active = {};
    var keys = {
        "\ufdd0'left": 37,
        "\ufdd0'up": 38,
        "\ufdd0'right": 39,
        "\ufdd0'down": 40,
        "\ufdd0'z": 90,
        "\ufdd0'space": 32
    };
  var capture = {
    37: true,
    38: true,
    39: true,
    40: true,
    90: true,
    32: true
  };

    var input = {

        key: function(k) {
            var cur = keys[k];
            if(!cur) return false;

            return active[cur];
        }

    }

    $(document).bind("keydown", function(e) {
      if(capture[e.keyCode]) {
        e.preventDefault();
      }
      active[e.keyCode] = true;
    });

    $(document).bind("keyup", function(e) {
      if(capture[e.keyCode]) {
        e.preventDefault();
      }
      delete active[e.keyCode];
    });

    window.input = input;

})(window);


