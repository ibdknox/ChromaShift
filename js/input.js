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

    var input = {

        key: function(k) {
            var cur = keys[k];
            if(!cur) return false;

            return active[cur];
        }

    }

    $(document).delegate("#game", "keydown", function(e) {
        e.preventDefault();
        active[e.keyCode] = true;
    });

    $(document).delegate("#game", "keyup", function(e) {
        e.preventDefault();
        delete active[e.keyCode];
    });

    window.input = input;

})(window);


