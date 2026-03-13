import { createContext, useMemo, useState } from 'react';
import { useEffectSkipMount } from '../hooks';

import './AnswerSelector.css';

export const AnswerSelectContext = createContext();

export function AnswerSelector({ children, id, onChange }) {
  const [answer, setAnswer] = useState();
  // const list = useMemo({ answer, setAnswer, questionId: id }, [answer, setAnswer]);

  useEffectSkipMount(() => {
    onChange({ id, answer });
  }, [answer]);
  return (
    <AnswerSelectContext.Provider value={{ answer, setAnswer, questionId: id }}>
      <div className="answer-selector-container">{children}</div>
    </AnswerSelectContext.Provider>
  );
}
