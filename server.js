const app = require('./lib/app');
const pool = require('./lib/utils/pool');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 7890;

const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () => {
  console.log(`Started on ${PORT}`);
})

// app.listen(PORT, () => {
//   // eslint-disable-next-line no-console
//   console.log(`Started on ${PORT}`);
// });

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
