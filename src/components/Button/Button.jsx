import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ incrementPage }) {
  return (
    <div className={css['ButtonWrap']}>
      <button className={css['Button']} type="button" onClick={incrementPage}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};