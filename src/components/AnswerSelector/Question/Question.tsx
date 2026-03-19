import './Question.css';

function Question({ children }) {
  return (
    <div
      className="question-container"
      style={{
        color: 'light-dark(var(--mantine-color-white), black)',
      }}
    >
      <p className="question-content">{children}</p>
    </div>
  );
}

export default Question;
