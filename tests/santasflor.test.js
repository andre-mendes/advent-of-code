const santasFloor = require('../index.js');

test('santa shoud be in 3º floor', () => {
  const inputValue = '((('
  const movesUp = '('
  const movesDown = ')'

  expect(santasFloor(inputValue, movesUp, movesDown)).toBe(3);
});

test('santa shoud be in -1º floor', () => {
  const inputValue = '())'
  const movesUp = '('
  const movesDown = ')'
  
  expect(santasFloor(inputValue, movesUp, movesDown)).toBe(-1);
});

test('santa shoud be in -3º floor', () => {
  const inputValue = ')))'
  const movesUp = '('
  const movesDown = ')'
  
  expect(santasFloor(inputValue, movesUp, movesDown)).toBe(-3);
});