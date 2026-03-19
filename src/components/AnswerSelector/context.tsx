import { createContext, useContext } from 'react';

export const AnswerSelectorContent = createContext(); // для создания провайдера - в главном файле

export function useAnswerSelectorContext() {
  const context = useContext(AnswerSelectorContent);

  if (!context) {
    throw new Error('Answer selector compound components should be used only with AnswerSelector');
  }
  return context;
} // для передачи контекста и проверки, что этот элемент относится к центральному
