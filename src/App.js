import React from "react";
import ExpenseItemList from './Components/Expenses/ExpenseItemList';
import NewExpense from './Components/NewExpense/NewExpense';


function App() {
  const expenses = [
    { title: "Car Insurance", amount: 300.67, date: new Date(2021, 3, 12) },
    { title: "Toilet Paper", amount: 24.88, date: new Date(2021, 4, 28) },
    { title: "New Tv", amount: 854.35, date: new Date(2021, 5, 29) },
    { title: "New Desk (Wooden)", amount: 742.22, date: new Date(2021, 7, 12) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('Printed in App.js')
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
