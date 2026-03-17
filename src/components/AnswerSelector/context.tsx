import { createContext, useContext } from 'react';

export const AnswerSelectorContent = createContext();

export function useAnswerSelectorContext() {
  const context = useContext(AnswerSelectorContent);
  if (!context) {
    throw new Error('Answer selector compound components should be used only with AnswerSelector');
  }
  return context;
}
