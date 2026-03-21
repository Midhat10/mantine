import React from 'react';

function Main({ counter }: { counter: number }) {
  return (
    <div>
      <p>Значение счётчика: {counter}</p>
    </div>
  );
}

export default Main;
