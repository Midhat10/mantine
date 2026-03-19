import React, { useState } from 'react';
import { AnswerSelectorContent } from '../context';
import useEffectSkipMount from '../hooks/useEffectSkipMount';
import { Radio } from '../Radio/Radio';

import './AnswerSelector.css';

import Question from '../Question/Question';

export function AnswerSelector({ children, id, onChange }) {
  const [answer, setAnswer] = useState(); //этот компонент будет хранить ответ на вопрос

  useEffectSkipMount(() => {
    onChange({ id, answer });
  }, [answer]); // эффект на изменение ответа, но нам не нужно, чтобы при первом закрепление объекта, чтобы у нас вызвалась функция ончендж
  return (
    <AnswerSelectorContent.Provider
      value={{
        answer,
        setAnswer,
        questionId: id,
      }}
    >
      {' '}
      {/* сделали сам провайдер */}
      <div className="answer-selector-container">{children}</div>
    </AnswerSelectorContent.Provider>
  );
}

AnswerSelector.Radio = Radio;
AnswerSelector.Question = Question;

// Этот компонент только создаёт общий контекст, его тут передаёт
