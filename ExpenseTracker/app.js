var expensesData = [];

function addExpense() {
    var expenseName = document.getElementById("expense-name").value;
    var expenseAmount = document.getElementById("expense-amount").value;
    var expenseCategory = document.getElementById("expense-category").value;

    var newItem = document.createElement("li");
    newItem.textContent = `${expenseName} - $${expenseAmount} (${expenseCategory})`;

    var expensesList = document.getElementById("expenses");
    expensesList.appendChild(newItem);

    expensesData.push({
        category: expenseCategory,
        amount: parseFloat(expenseAmount)
    });

    updateChart(expensesData);

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-category").value = "";
}

function updateChart(expenseData) {
    // Get the canvas element
    var ctx = document.getElementById('expense-chart').getContext('2d');

    // Clear the existing chart (if any)
    if (window.myPie) {
        window.myPie.destroy();
    }

    // Create a new pie chart
    window.myPie = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: expenseData.map(item => item.category),
            datasets: [{
                data: expenseData.map(item => item.amount),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    // Add more colors as needed
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    // Add more colors as needed
                ]
            }]
        }
    });
}

