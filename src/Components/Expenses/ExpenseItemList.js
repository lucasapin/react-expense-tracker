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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={changeYearHandler} />
      {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default ExpenseItemList;
