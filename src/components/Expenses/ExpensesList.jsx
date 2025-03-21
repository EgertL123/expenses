import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ expenses }) => {    
    if (expenses.length === 0) {
        return(
            <p className='expenses-list__fallback'>No expenses found</p>
        )
    }
    return (
            <ul className='expenses-list'>
            {
                expenses.length > 0 && expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expenseData={expense}/>
                })
            }
            </ul>
    )
}

export default ExpensesList