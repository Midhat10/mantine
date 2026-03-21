import React, { useState } from 'react';
import Modal from '../Modal/Modal';

function Header({
  counter,
  setCounter,
}: {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ position: 'relative' }}>
      <h2>привет всем</h2>

      <button
        type="button"
        onClick={() => {
          if (counter <= 1) {
            setIsModalOpen(true);
          } else {
            setCounter((oldValue: number) => oldValue - 1);
          }
        }}
      >
        убавить
      </button>
      <button type="button" onClick={() => setCounter((oldValue: number) => oldValue + 1)}>
        прибавить
      </button>
      {isModalOpen && (
        <Modal onClose={onClose}>
          <h2>Внимание! </h2>
          <p>Счётчик не может быть меньше 1</p>
          <p>🚀</p>
        </Modal>
      )}
    </div>
  );
}

export default Header;
