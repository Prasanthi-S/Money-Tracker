async function addExpense() {
    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    if (!description || isNaN(amount)) {
        alert('Please enter valid data.');
        return;
    }

    try {
        await axios.post('/api/expense', { description, amount });
        document.getElementById('expenseList').innerHTML += `<li>${description}: $${amount.toFixed(2)}</li>`;
    } catch (error) {
        console.error('Error adding expense:', error);
    }
}

async function addIncome() {
    const description = document.getElementById('incomeDescription').value;
    const amount = parseFloat(document.getElementById('incomeAmount').value);

    if (!description || isNaN(amount)) {
        alert('Please enter valid data.');
        return;
    }

    try {
        await axios.post('/api/income', { description, amount });
        document.getElementById('incomeList').innerHTML += `<li>${description}: $${amount.toFixed(2)}</li>`;
    } catch (error) {
        console.error('Error adding income:', error);
    }
}
