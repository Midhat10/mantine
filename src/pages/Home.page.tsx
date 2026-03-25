import { useEffect, useState, useTransition } from 'react';

import './Home.page.css';

import { Comments } from '@/components/Comments';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const filterBySearch = (entities: Comment[], search: string) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

export function HomePage() {
  // const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // startTransition(() => {
    // });
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data));
  }, []);

  return (
    <div>
      <input onChange={handleSearch} />
      {/* {isPending && <h1>Вычисление...</h1>} */}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}
