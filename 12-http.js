// creating local server
const http = require('http');

// red: incoming client request
// res: response sent back
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to homepage");
    } 
    if (req.url === "/about") {
        res.end("Welcome to about");
    }
    // if client requests url that does not exist
    res.end(`
        <h1> Oops! </h1>
        <p> Page does not exist </p>
        <a href="/"> Return to homepage </a>
        `)
})

// listen(port-number)
server.listen(3030);