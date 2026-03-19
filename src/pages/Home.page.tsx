import '@mantine/core';
import './Home.page.css';

import { useState } from 'react';
import { AnswerSelector } from '@/components/AnswerSelector/AnswerSelector/AnswerSelector';
import { question1 as q1 } from '../data/questions';

export function HomePage() {
  const [answers, setAnswers] = useState({}); // предполагаются несколько вопросов на странице. поэтому тут будем хранить -ответы, а ключ - айди вопроса

  const handleAnswerChange = (data) => {
    setAnswers((oldAnswer) => ({ ...oldAnswer, [data.id]: data.answer }));
    console.log('question', data.id, JSON.stringify(data, null, 2));
  }; // здесь сохраняем ответы

  const handleSubmit = () => {
    console.log('answers', JSON.stringify(answers, JSON.stringify(answers, null, 2)));
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

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
