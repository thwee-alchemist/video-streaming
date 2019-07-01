const express = require('express');
const app = express();
const yargs = require('yargs')

const argv = yargs
  .option('port', {
    alias: 'p',
    description: 'specifies to port to listen on',
    type: 'number'
  })
  .help()
  .alias('help', 'h')
  .argv;

app.use('/', express.static('public'));

const desiredPort = argv.port !== undefined ? argv.port : 8000;
const server = app.listen(desiredPort, function(){
  var port = server.address().port;
  console.log(`Listening on port ${port}`);
})

module.exports = server;