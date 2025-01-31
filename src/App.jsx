import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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
  return (
    <Expenses expenses={expenses}>

    </Expenses>
  );
}

export default App