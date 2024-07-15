const express = require("express")
const app = express()

app.use(express.urlencoded({extended: false}))

app.get("/", function (req, res) {
    res.send("<form action='/store-user' method='POST'><input type='text' name='username'><button>Submit</button></form>")
})

app.get("/today", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>")
})

app.post("/store-user", function (req, res) {
    const userName = req.body.username
    res.send("<h1>" + userName + "</h1>")
})

app.listen(3000)
