const http = require('http');
const port = 3000;

const server = http.createServer(function (req, res) {
    res.write('Smith!!!  What is happening?!');

    res.end();
})

server.listen(port, function(error) {
    if (error) {
        console.log('Uh oh...something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port + ', yo!')
    }
})