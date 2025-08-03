const expenses = [
  { type: "food", amount: 1000 },
  { type: "transport", amount: 500 },
  { type: "food", amount: 700 },
  { type: "medical", amount: 4500 },
  { type: "medical", amount: 6000 },
  { type: "bills", amount: 1200 }
];

const TotalExpense = expenses.reduce((acc, item) => {
  acc[item.type] = (acc[item.type] || 0) + item.amount;
  return acc;
}, {});

console.log("Total Expenses Are :", TotalExpense);

