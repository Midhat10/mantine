import './Home.page.css';

import { useReducer, useState } from 'react';

const books = [
  'Война и мир',
  '1984',
  'Преступление и наказание',
  'Улисс',
  'Гордость и предубеждение',
  'Тихий Дон',
  'Великий Гэтсби',
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_book':
      return {
        ...state, // если у нас в стейте лежит больше посылов, чем одно
        books: [...state.books, action.payload],
      };
    case 'take_book':
      return {
        ...state,
        books: state.books.filter((book) => book !== action.payload),
      };
    case 'inventory':
      return {
        ...state,
        inventory: [...state.inventory, new Date().toLocaleString()],
      };
    case 'type_text':
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

function HomePage() {
  const [state, dispatch] = useReducer(reducer, { books, inventory: [], value: '' });

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch({
      type: 'add_book',
      payload: state.value,
    });
  };

  const handleTakeBook = (book) => () => {
    dispatch({
      type: 'take_book',
      payload: book,
    });
  };

  const handleInventory = () => {
    dispatch({
      type: 'inventory',
    });
  };

  const handleText = (e) => {
    dispatch({
      type: 'type_text',
      payload: e.target.value,
    });
  };

  console.log('state', state);

  return (
    <>
      <h3>Список книг</h3>
      <form>
        <input value={state.value} onChange={handleText} type="text" />
        <button type="submit" className="add" onClick={handleAddBook}>
          Добавить книгу
        </button>
      </form>
      <ul className="list">
        {state.books.map((book) => (
          <li key={book}>
            <div>{book}</div>
            <button type="button" onClick={handleTakeBook(book)}>
              Выдать книгу
            </button>
          </li>
        ))}
      </ul>

      <h3>Инвентаризация</h3>
      {state.inventory.map((date) => (
        <div key={date}>{date}</div>
      ))}
      <button onClick={handleInventory} type="button">
        Провести инвентаризацию
      </button>
    </>
  );
}

export default HomePage;
