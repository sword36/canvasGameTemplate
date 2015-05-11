/**
 * Created by USER on 10.05.2015.
 */
(function() {
    var pressedKeys = [];
    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch (code) {
            case 32:
                key = "SPACE";
                break;
            case 37:
                key = "LEFT";
                break;
            case 38:
                key = "UP";
                break;
            case 39:
                key = "RIGHT";
                break;
            case 40:
                key = "DOWN";
                break;
            default:
                key = String.fromCharCode(code);
        }

        document.addEventListener("keydown", function (e) {
            setKey(e, true);
        });

        document.addEventListener("keyup", function (e) {
            setKey(e, false);
        });
        window.addEventListener("blur", function () {
            pressedKeys = [];
        });

    }
    window.input = {
        isDown: function (key) {
            return pressedKeys[key.toUpperCase()];
        }
    };
})();