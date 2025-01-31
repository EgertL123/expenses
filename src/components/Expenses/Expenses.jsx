import ExpenseItem from "./ExpenseItem.jsx"
import Card from "../UI/Card.jsx"
import './Expenses.css'

const Expenses = (props) => {

    return(
        <Card className="expenses">
            <ExpenseItem expenseData={props.expenses[0]}/>
            <ExpenseItem expenseData={props.expenses[0]}/>
        </Card>
    )
}

export default Expenses