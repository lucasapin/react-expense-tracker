import React from "react";
import ExpenseItemList from './Components/ExpenseItemList';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 3, 12) },
    { title: "Toilet Paper", amount: 24.88, date: new Date(2021, 4, 28) },
    { title: "New Tv", amount: 854.35, date: new Date(2021, 5, 29) },
    { title: "New Desk (Wooden)", amount: 742.22, date: new Date(2021, 7, 12) },
  ];

  return (
    <div>
      <h2>LET'S GET STARTED</h2>
      <ExpenseItemList expenses={expenses} />
    </div>
  );
}

export default App;
