const express = require("express");
const cors = require("cors");
const server = express();

server.set("port", process.env.PORT || 5000);
server.set("host", process.env.HOST || "0.0.0.0");
server.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

server.get("/", function (req, res) {
    res.send("ip : " + req.ip);
});

server.listen(server.get("port"), server.get("host"), () =>
    console.log(
        "Server is running on : " + server.get("host") + " : " + server.get("port")
    )
);