import { useDeferredValue, useState, useTransition } from 'react';

import './Home.page.css';

function SearchResultComponent({ searchResult }) {
  const deferredSearchResult = useDeferredValue(searchResult);
  return (
    <ul>
      {deferredSearchResult.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function HomePage() {
  const [searchResult, setSearchResult] = useState<Array<number>>([]);
  const [searchCount, setSearchCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [showSearchHistory, setShowSearchHistory] = useState(false);

  const makeSearch = () => {
    setSearchCount((prevCount) => prevCount + 1);
    // startTransition(() => {
    setSearchResult(
      Array(20000)
        .fill(undefined)
        .map((_, i) => i + 1)
    );
    // });
  };

  console.log('counter');

  return (
    <div>
      <button type="button" onClick={makeSearch}>
        {searchCount === 0 ? 'Search' : `Search ${searchCount} times`}
      </button>
      <button type="button" onClick={() => setShowSearchHistory(true)}>
        Search History
      </button>
      {showSearchHistory ? (
        <section> Your search results</section>
      ) : (
        <section>
          {/* {isPending ? 'Loading...' : null} */}
          <SearchResultComponent searchResult={searchResult} />
        </section>
      )}
    </div>
  );
}
