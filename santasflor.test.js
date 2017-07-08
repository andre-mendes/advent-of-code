const santasFloor = require('./index.js');

test('sant shoud be in 3º flor', () => {
  const inputValue = '((('
  expect(santasFloor(inputValue)).toBe('3');
});