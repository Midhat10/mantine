import { useAnswerSelectorContext } from '../context';

import './Radio.css';

function Radio({ id, children }) {
  const { questionId, setAnswer } = useAnswerSelectorContext();
  const handleClick = () => {
    setAnswer(id);
  };
  return (
    <label className="radio-container" htmlFor={id}>
      {children}
      <input type="radio" id={id} value={id} name={questionId} onClick={handleClick} />
      <span className="radio-checkmark"></span>
    </label>
  );
}

export default Radio;
