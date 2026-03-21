import { useState } from 'react';

import './Home.page.css';

import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

export function HomePage() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="main-container">
      <Header setCounter={setCounter} counter={counter} />
      <Main counter={counter} />
    </div>
  );
}
