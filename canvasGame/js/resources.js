/**
 * Created by USER on 07.05.2015.
 */
(function () {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];

    function load(urlOfArr) {
        if (urlOfArr instanceof Array) {
            urlOfArr.forEach(function (url) {
                _load(url);
            });
        } else {
            _load(urlOfArr);
        }
    }

    function _load(url) {
        if (resourceCache[url]) {
            return resourceCache[url];
        } else {
            var img = new Image();
            img.onload = function () {
                resourceCache[url] = img;
                if (isReady()) {
                    readyCallbacks.forEach(function (func) {
                        func();
                    });
                }
            };
            img.src = url;
            resourceCache[url] = false;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }

    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();