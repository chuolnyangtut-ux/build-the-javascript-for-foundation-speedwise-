# SpendWise - JavaScript Foundation

## Project Description
SpendWise is a financial web application designed to help users manage their personal budgets. This phase transforms SpendWise from a static layout into an interactive application capable of processing user-provided financial data, performing calculations, and displaying budget summaries.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Used `let` and `const` keywords to declare variables for storing total budget, expense amounts, and calculated balances.
- **User Input Collection**: Utilized `prompt()` to capture input directly from the user and converted strings to numeric values using `Number()`.
- **Functions**: Created reusable functions (`calculateBalance` and `getBudgetStatus`) to encapsulate business logic and calculations.
- **Control Flow**: Implemented `if/else` conditional statements to determine spending status based on balance values.
- **Console Output**: Logged clearly labeled, human-readable summary reports directly to the browser developer tools console.

## How Variables Are Used
- `totalBudget`: Holds the numeric value of the user's overall budget limit.
- `totalExpenses`: Stores the sum of user expenses.
- `remainingBalance`: Contains the output returned by calling `calculateBalance(totalBudget, totalExpenses)`.
- `statusMessage`: Stores the descriptive assessment returned by `getBudgetStatus()`.
