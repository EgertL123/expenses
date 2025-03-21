import './App.css'
import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DYMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2024, 10, 12),
    title: 'New book',
    price: 30.99
  },
  {
    id: 2,
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  }
] 

const addExpenseHandler = (expense) => {
  console.log('In App.js')
  console.log(expense)
}

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={DYMMY_EXPENSES} />
    </div>
  );
}

export default App