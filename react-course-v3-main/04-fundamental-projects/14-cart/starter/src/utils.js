// utils.js
export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price; // Fix the calculation here
  }

  return { totalAmount, totalCost };
};
