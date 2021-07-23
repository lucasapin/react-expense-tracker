import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'

function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const changeYearHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={changeYearHandler} />
      {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default ExpenseItemList;
