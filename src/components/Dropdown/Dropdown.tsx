import React, { createContext, useContext, useState } from 'react';

// 1. Создаем общий контекст для управления состоянием (открыто/закрыто)
const DropdownContext = createContext();

// 2. Основной компонент-оболочка
export function Dropdown({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>{children}</div>
    </DropdownContext.Provider>
  );
}

// 3. Создаем объект DropdownMenu для пространства имен (Namespace)
export const DropdownMenu = {
  Trigger: ({ children }) => {
    const { toggle } = useContext(DropdownContext);
    // asChild логика: передаем обработчик клика первому ребенку (Button)
    return React.cloneElement(children, { onClick: toggle });
  },
  TriggerIcon: () => <span style={{ marginLeft: '8px' }}>▼</span>,
};

// 4. Добавляем подкомпоненты к самому Dropdown (через точку)
Dropdown.List = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  if (!isOpen) return null;

  return (
    <ul
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '8px',
        listStyle: 'none',
        zIndex: 10,
      }}
    >
      {children}
    </ul>
  );
};

Dropdown.Item = ({ children }) => {
  return (
    <li style={{ padding: '4px 8px', cursor: 'pointer' }} onClick={() => console.log(children)}>
      {children}
    </li>
  );
};

// Вспомогательный компонент Button (если у вас нет Chakra или другой библиотеки)
export const Button = ({ children, variant, onClick }) => (
  <button onClick={onClick} className={`btn-${variant}`} style={{ padding: '8px 16px' }}>
    {children}
  </button>
);
