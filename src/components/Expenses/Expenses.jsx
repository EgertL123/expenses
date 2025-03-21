import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import { useState } from "react";


const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2025");


    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(`Year data in Expenses.jsx ${ event.target.value }`);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
        <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}/>  
        <ExpensesList expenses={filteredExpenses}/>
            </Card>
)
}

export default Expenses