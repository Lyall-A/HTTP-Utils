const defaultMethods = ["GET", "HEAD", "POST", "PUT", "DELETE"];

module.exports = class {
    constructor(options = { }) {
        this.listeners = [];

        this.addMethod();
        (options.methods || defaultMethods).forEach(method => this.addMethod(method));
    }

    route(req, res) {
        console.log("route:", req.url);
    }

    addMethod(method) {
        const upperCase = method?.toUpperCase();
        const lowerCase = method?.toLowerCase();

        this[lowerCase || "use"] = (url, callback) => {
            if (typeof url == "function" && !callback) {
                url = callback;
                callback = undefined;
            }

            this.listeners.push({
                method: upperCase,
                url,
                callback
            });
        }
    }
}