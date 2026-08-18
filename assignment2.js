const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    response.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Portal</title>
        </head>
        <body>
            <h1>Student Portal</h1>

            <p><strong>Name:</strong> Shubh Saraswat</p>
            <p><strong>Course:</strong> B.Tech CSE</p>
            <p><strong>College:</strong> ITM Skills University</p>

            <p>Welcome to my Node.js application.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});