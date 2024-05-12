const http = require("http");
const https = require("https");

module.exports = class {
    constructor(options = { }, serverOptions = { }) {
        this.server = (options.ssl ? https : http).createServer(serverOptions);

        if (options.router) this.server.on("request", options.router.route);
        if (options.listen) this.server.listen(options.listen, options.listenCallback);
    }
}