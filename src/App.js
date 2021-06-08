import React from 'react';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 3, 12)},
    { title: 'Toilet Paper', amount: 24.88, date: new Date(2021, 4, 28)},
    { title: 'New Tv', amount: 854.35, date: new Date(2021, 5, 29)},
    { title: 'New Desk (Wooden)', amount: 742.22, date: new Date(2021, 7, 12)}
  ]

  return (
    <div>
      <h2>LET'S GET STARTED</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
