// Create web server
// Import the 'http' module
const http = require('http');

// Define the server's port
const PORT = 3000;

// Create the web server
const server = http.createServer((req, res) => {
    // Set the content type for the response
    res.setHeader('Content-Type', 'text/html');

    // Handle different routes
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Welcome to the Home Page!</h1>');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>About Us</h1><p>This is a simple web server example.</p>');
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
