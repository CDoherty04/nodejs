const http = require("http")

function handleRequests(request, response) {
    response.statusCode = 200
    response.end("<h1>Hello</h1>")
}

const server = http.createServer(handleRequests)

server.listen(3000)
