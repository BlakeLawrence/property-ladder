// CURRENCY CONVERTOR FUNCTION
export function currency(amount) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}

// OOP classes
class Taxband {
  constructor(minValue, percentage) {
    this.minValue = minValue;
    this.percentage = percentage;
  }
}

let firstTimeTaxBands = [
  new Taxband(750000, 12),
  new Taxband(325000, 10),
  new Taxband(250000, 5),
  new Taxband(175000, 2),
];

export function firstTimeBuyerRate(price) {
  let taxOwed = 0;
  for (let i = 0; i < firstTimeTaxBands.length; i++) {
    if (price > firstTimeTaxBands[i].minValue) {
      let priceToPayTaxOn = price - firstTimeTaxBands[i].minValue;
      taxOwed += (priceToPayTaxOn / 100) * firstTimeTaxBands[i].percentage;
      price = firstTimeTaxBands[i].minValue;
    }
  }

  return taxOwed;
}
let nextTimeTaxBands = [
  new Taxband(750000, 12),
  new Taxband(325000, 10),
  new Taxband(250000, 5),
  new Taxband(175000, 2),
];

export function nextTimeBuyerRate(price) {
  let taxOwed = 0;
  for (let i = 0; i < nextTimeTaxBands.length; i++) {
    if (price > nextTimeTaxBands[i].minValue) {
      let priceToPayTaxOn = price - nextTimeTaxBands[i].minValue;
      taxOwed += (priceToPayTaxOn / 100) * nextTimeTaxBands[i].percentage;
      price = nextTimeTaxBands[i].minValue;
    }
  }

  return taxOwed;
}
let additionalTaxBands = [
  new Taxband(750000, 12),
  new Taxband(325000, 10),
  new Taxband(250000, 5),
  new Taxband(175000, 2),
];

export function additionalBuyerRate(price) {
  let taxOwed = 0;
  for (let i = 0; i < additionalTaxBands.length; i++) {
    if (price > additionalTaxBands[i].minValue) {
      let priceToPayTaxOn = price - additionalTaxBands[i].minValue;
      taxOwed += (priceToPayTaxOn / 100) * additionalTaxBands[i].percentage;
      price = additionalTaxBands[i].minValue;
    }
  }

  return taxOwed;
}
