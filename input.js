let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  };
  const wasds = ['w', 'a', 's', 'd'];
  if (wasds.includes(data)) {
    switch (data) {
      case 'w': connection.write('Move: up');
      break;
      case 'a': connection.write('Move: left');
      break;
      case 's': connection.write('Move: down');
      break;
      case 'd': connection.write('Move: right');
      break;
      default: break;
    }
  }

  const msgInputs = [1, 2, 3, 4, 5];
  if (msgInputs.includes(data)) {
    switch (data) {
      case '1': connection.write('Say: Beep boop!');
      break;
      case '2': connection.write('Say: What\'s up, gamers!');
      break;
      case '3': connection.write('Say: Get out da way!');
      break;
      case '4': connection.write('Say: I am snek c:');
      break;
      case '5': connection.write('Say: Fite me!');
      break;
    }
  }
};


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};


module.exports = {
  setupInput
};
