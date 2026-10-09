// 1. Store Application Data (Initial Default Variables)
let totalBudget = 0;
let totalExpenses = 0;

// 2. Reusable Functions
// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to check budget status
function getBudgetStatus(balance) {
    if (balance > 0) {
        return "You are within your budget!";
    } else if (balance === 0) {
        return "You have completely used up your budget.";
    } else {
        return "Warning: You are over budget!";
    }
}

// 3. Collect User Input via Prompts
// Convert prompt input strings into numbers using Number() or parseFloat()
let userInputBudget = prompt("Enter your total monthly budget:");
totalBudget = Number(userInputBudget);

let userInputExpenses = prompt("Enter your total monthly expenses:");
totalExpenses = Number(userInputExpenses);

// 4. Perform Budget Calculations
let remainingBalance = calculateBalance(totalBudget, totalExpenses);
let statusMessage = getBudgetStatus(remainingBalance);

// 5. Display Results in Browser Console
console.log("=== SPENDWISE BUDGET SUMMARY ===");
console.log("Total Budget: $" + totalBudget);
console.log("Total Expenses: $" + totalExpenses);
console.log("Remaining Balance: $" + remainingBalance);
console.log("Status: " + statusMessage);
console.log("=================================");
