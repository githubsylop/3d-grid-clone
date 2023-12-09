console.log("start index 2!!!!!!!!!!!");

let orders = [
  [{ instrument: { symbol: 1 } }, { instrument: { symbol: 2 } }],
  [{ instrument: { symbol: 12 } }],
];

function extractSymbols(orders) {
  let symbols = [];
  for (const order of orders) {
    for (const orderLeg of order) {
      symbols.push(orderLeg.instrument.symbol);
    }
  }
  return symbols;
}
let x = extractSymbols(orders);
console.log(x);
