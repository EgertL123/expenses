import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ expenses }) => {
    const filterChangeHandler = (event) => {
        console.log(`Year data in Expenses.jsx ${ event.target.value }`);
    }

    return (
        <>

        <Card className='expenses'>
        <ExpensesFilter onChangeFilter={filterChangeHandler}/>

        {
    expenses.map((expense) => (
        <ExpenseItem key={expense.id} expenseData={expense} />
    ))
}
        </Card>
        </>
    )
}

export default Expenses