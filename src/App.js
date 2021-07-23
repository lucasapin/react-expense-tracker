import React, { useState } from "react";
import ExpenseItemList from './Components/Expenses/ExpenseItemList';
import NewExpense from './Components/NewExpense/NewExpense';


const dummy_expenses = [
  { title: "Car Insurance", amount: 300.67, date: new Date(2021, 3, 12) },
  { title: "Toilet Paper", amount: 24.88, date: new Date(2021, 4, 28) },
  { title: "New Tv", amount: 854.35, date: new Date(2021, 5, 29) },
  { title: "New Desk (Wooden)", amount: 742.22, date: new Date(2021, 7, 12) },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
