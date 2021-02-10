const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log(`Success! You're connected to the game server.`);
    conn.write('Name: AIB');


  return conn;
}

module.exports = {
  connect
};