import { memo, useState, useTransition } from 'react';

import './Home.page.css';

// 1. Создаем "тяжелый" компонент, как SlowPost
const SlowItem = memo(function SlowItem({ index }: { index: number }) {
  const startTime = performance.now();
  // Искусственная задержка 0.5мс на каждый элемент
  while (performance.now() - startTime < 0.5) {}

  return <li>Result #{index}</li>;
});

export function HomePage() {
  const [searchCount, setSearchCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  // Теперь храним не массив данных, а просто их количество или флаг "запуска"
  const [itemsCount, setItemsCount] = useState(0);

  const makeSearch = () => {
    setSearchCount((prev) => prev + 1);

    // startTransition теперь просто меняет число.
    // Сама тяжелая отрисовка начнется в return.
    startTransition(() => {
      setItemsCount(2000); // 2000 "тяжелых" элементов вместо 20000 пустых
    });
  };

  return (
    <div>
      <button onClick={makeSearch}>
        {searchCount === 0 ? 'Search' : `Search ${searchCount} times`}
      </button>
      <button onClick={() => setShowSearchHistory(true)}>Search History</button>
      <button onClick={() => setShowSearchHistory(false)}>reset</button>

      {showSearchHistory ? (
        <section>Your search history</section>
      ) : (
        <section style={{ opacity: isPending ? 0.5 : 1 }}>
          {isPending ? <p>Loading...</p> : null}
          <ul>
            {/* 
               ВАЖНО: Тяжелая работа происходит здесь. 
               React отрисует 10 элементов, проверит, нет ли клика по "Search History", 
               и если есть — просто бросит этот цикл и переключит экран.
            */}
            {Array.from({ length: itemsCount }).map((_, i) => (
              <SlowItem key={i} index={i} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
