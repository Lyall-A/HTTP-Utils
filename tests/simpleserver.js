const SimpleServer = require("../SimpleServer");
const { server, router } = new SimpleServer(5000);

router.get("/", (req, res) => {
    console.log("/");
});

router.get("/*", (req, res) => {
    console.log("404:", req.url);
});