import '@mantine/core';

import AnswerSelector from '@/components/AnswerSelector';
import { question1 as q1 } from '@/data/questions';

export function HomePage() {
  const handleAnswerChange = () => {};
  return (
    <div className="main-container">
      <AnswerSelector id={q1.id} onChange={handleAnswerChange}>
        Hello
      </AnswerSelector>
    </div>
  );
}
