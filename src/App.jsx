import { useState, useEffect } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DYMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2023, 0, 19),
    title: 'New book',
    price: 30.99
  },
  {
    id: 'id2',
    date: new Date(2024, 10, 12),
    title: 'New jeans',
    price: 99.99
  },
  {
    id: 'id3',
    date: new Date(2024, 0, 25),
    title: 'New bag',
    price: 199.99
  }
] 

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      return storedExpenses.map((expense) => ({
        ...expense,
        date: new Date(expense.date),
      }));
    }
    return DYMMY_EXPENSES; 
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
  })
}


  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses expenses={expenses} />
    </div>
  );
}

export default App