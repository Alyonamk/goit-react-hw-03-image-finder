import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  handleKetdown = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKetdown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKetdown);
  }

  render() {
    return createPortal(
      <div className={css['Overlay']} onClick={this.handleBackdropClick}>
        <div className={css['Modal']}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};