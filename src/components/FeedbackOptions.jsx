import PropTypes from 'prop-types';
import css from '../components/FeedbackOption.module.css';
function FeedbackOption({ onLeaveFeedback, options }) {
  return (
    <div>
      <ul className={css.box}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              className={css.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOption.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOption;
