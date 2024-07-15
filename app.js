const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("<h1>Hello</h1>")
})

app.get("/today", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>")
})

app.listen(3000)
