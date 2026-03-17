import '@mantine/core';

import { useState } from 'react';
import AnswerSelector from '@/components/AnswerSelector';
import { question1 as q1 } from '@/data/questions';

export function HomePage() {
  const [answers, setAnswers] = useState({});
  const handleAnswerChange = (data) => {
    setAnswers((oldAnswer) => ({ ...oldAnswer, [data.id]: data.answer }));
    console.log('question', data.id, JSON.stringify(data, null, 2));
  };

  const handleSubmit = () => {
    console.log('answers', JSON.stringify(answers, null, 2));
  };
  return (
    <div className="main-container">
      <AnswerSelector id={q1.id} onChange={handleAnswerChange}>
        <AnswerSelector.Question>{q1.text}</AnswerSelector.Question>
        {q1.answers.map(({ id, title }) => (
          <AnswerSelector.Radio key={id} id={id}>
            {title}
          </AnswerSelector.Radio>
        ))}
      </AnswerSelector>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
