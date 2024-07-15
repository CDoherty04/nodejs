const http = require("http")

function handleRequests(request, response) {
    if (request.url === "/") {
        response.statusCode = 200
        response.end("<h1>Hello</h1>")
    }
    else if (request.url === "/today") {
        response.statusCode = 200
        response.end("<h1>" + new Date().toISOString() + "</h1>")
    }
    else {
        response.statusCode = 404
        response.end("<h1>Page Unavailable</h1>")
    }
}

const server = http.createServer(handleRequests)

server.listen(3000)
