const express = require('express');
const app = express();
const port = 8000;

app.use('/common', express.static('common'));
app.use('/', express.static('public'));
app.use('/feed', express.static('private'));

const server = app.listen(port, function(){
  var port = server.address().port;
  console.log(`Listening on port ${port}`);
});

const io = require('socket.io')(server);

io.on('connected', (socket) => {
  console.log('a page connected', socket.url);
})





module.exports = server;