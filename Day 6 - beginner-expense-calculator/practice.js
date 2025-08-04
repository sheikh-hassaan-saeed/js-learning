let expenses = [];

const addExpense = () => {
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

const deleteExpense = (id) => {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

const renderExpenses = () => {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach(({ id, title, amount }) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${title} — Rs. ${amount}
      <button class="delete" onclick="deleteExpense(${id})">❌</button>
    `;
    list.appendChild(li);
  });

  const total = expenses.reduce((acc, { amount }) => acc + amount, 0);
  document.getElementById("total").innerText = total;
}
