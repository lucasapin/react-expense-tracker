import React, { useState } from "react";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList';

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
      {/* {expensesContent} */}
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default ExpenseItemList;
