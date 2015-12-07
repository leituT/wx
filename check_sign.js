
var http = require('http');
var fs = require("fs");

var sign = require('./sign.js');

http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/index.html":
            fs.readFile("index.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
                console.log(err);
                res.write(data);
                res.end();
            });
            break;
        case "/item":
            var s = sign('kgt8ON7yVITDhtdwci0qeWLGCCxSz31BD0o3Vn2XeEzNoeMxNxrBsaVHg9xXsz2fmKIFS49L5brMWXHq0jSgFw', 'http://ttime.qiniudn.com/wxtest.html');
            res.write(JSON.stringify(s));
            res.end();
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("<h1>404</h1><p>你要找的页面不存在</p>")
    }
}).listen(process.env.PORT || 3000);


/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */
