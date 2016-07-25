var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');

    function WebSocketTest() {
        var WebSocket = require('ws');
        var ws = new WebSocket("wshere");

        var req = {
            "type": "subscribe",
            "product_id": ""
        }

        ws.onopen = function () {
            ws.send(JSON.stringify(req));
        };

        ws.onmessage = function (evt) {
            console.log("data", evt.data);
        };

        ws.onclose = function () {
        };
    }

    //WebSocketTest();

});

module.exports = router;
