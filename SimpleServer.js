const Server = require("./Server");
const Router = require("./Router");

module.exports = class {
    constructor(port) {
        this.router = new Router();

        this.server = new Server({
            listen: port,
            router: this.router,
            listenCallback: () => console.log(`Listening at :${port}`)
        });
    };
}