const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  };
};

const setupInput = () => {
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