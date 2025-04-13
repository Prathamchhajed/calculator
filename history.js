// history.js

const history = [];

export function addToHistory(expression, result) {
  history.push(`${expression} = ${result}`);
  if (history.length > 10) history.shift(); // Keep only last 10 entries
}

export function getHistory() {
  return history;
}

export function clearHistory() {
  history.length = 0;
}
