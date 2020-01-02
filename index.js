const express = require('express');
const app = express();
const port = process.env.PORT || 80

app.use('/common', express.static('common'));
app.use('/', express.static('public'));
app.use('/feed', express.static('private'));

const server = app.listen(port, function(){
  var port = server.address().port;
  console.log(`Listening on port ${port}`);
});

const io = require('socket.io')(server);


io.on('connection', (socket) => {
  console.log('a page connected');

  if(socket.handshake.headers.referer.endsWith('feed/')){
    console.log('feed connected');
    socket.on('playback', (data) => {
      // console.log('data received')
  
      socket.broadcast.emit('playback', data)
    })
  }else{
    console.log('stream connected')
    
  }
});

module.exports = server;
