const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//     res.status(200).send("Hello World.");
// });

app.use("/user", require(".router/user.js"));

app.listen(3000);