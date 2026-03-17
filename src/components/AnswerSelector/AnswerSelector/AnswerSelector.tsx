import { createContext, useState } from 'react';
import { AnswerSelectorContent } from '../context';
import { useEffectSkipMount } from '../hooks';
import Question from '../Question/Question';
import Radio from '../Radio/Radio';

import './AnswerSelector.css';

export const AnswerSelectContext = createContext({});

interface AnswerSelectorProps {
  children: React.ReactNode;
  id: string;
  onChange: (payload: { id: string; answer: string | undefined } | undefined) => void;
}

export function AnswerSelector({ children, id, onChange }: AnswerSelectorProps) {
  const [answer, setAnswer] = useState<string>();

  useEffectSkipMount(() => {
    onChange({ id, answer });
  }, [answer]);
  return (
    <AnswerSelectorContent.Provider value={{ answer, setAnswer, questionId: id }}>
      <div className="answer-selector-container">{children}</div>
    </AnswerSelectorContent.Provider>
  );
}

AnswerSelector.Radio = Radio;
AnswerSelector.Question = Question;
