import { useAnswerSelectorContext } from '../context';

import './Radio.css';

export function Radio({ id, children }) {
  const { questionId, setAnswer } = useAnswerSelectorContext();
  const handleClick = () => {
    setAnswer(id);
  };
  return (
    <label
      className="radio-container"
      htmlFor={id}
      style={{
        color: 'light-dark(var(--mantine-color-white), black)',
      }}
    >
      {' '}
      {/*указываем id - для которого добавляем лейбл(описание) htmlFor нужен, чтобы связать с инпутом через id={id}*/}
      {children}
      <input type="radio" id={id} value={id} name={questionId} onClick={handleClick} />
      <span className="radio-checkmark"></span>
    </label>
  );
}
