import './ExpenseItem.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import { useState } from 'react'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
    <li>
        <div className='expense-item'>
            <ExpenseDate date={props.expenseData.date}/>
            <div className='expense-item_description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item_price'>{props.expenseData.price}$</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    </li>
    )
}

export default ExpenseItem