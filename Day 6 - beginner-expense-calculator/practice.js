let expenses = [];

function addExpense() {
  const titleInput = document.getElementById("title");
  const amountInput = document.getElementById("amount");

  const title = titleInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (!title || isNaN(amount)) {
    alert("Please enter valid details!");
    return;
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount,
  };

  expenses.push(newExpense);
  titleInput.value = "";
  amountInput.value = "";
  renderExpenses();
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.title} — Rs. ${exp.amount}
      <button class="delete" onclick="deleteExpense(${exp.id})">❌</button>
    `;
    list.appendChild(li);
  });

  const total = expenses.reduce((acc, item) => acc + item.amount, 0);
  document.getElementById("total").innerText = total;
}
