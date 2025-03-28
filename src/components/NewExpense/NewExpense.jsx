import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import { useState } from 'react'

const NewExpense = (props) => {
    const [editForm, setEditForm] = useState(false)

    const startEditingHandler = () => {
        console.log('Form opened for editing')
        setEditForm(true)
    }

    const stopEditingHandler = () => {
        console.log('Form closed without saving')
        setEditForm(false)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('Form submitted with data!')
        props.onAddExpense(expenseData)
        setEditForm(false)
    }
    return (
        <div className="new-expense">
            {!editForm && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {editForm && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}       
        </div>
    )
}

export default NewExpense