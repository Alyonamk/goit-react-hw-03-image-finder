import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal';

import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props;

    return (
      <li className={css['ImageGalleryItem']}>
        <img
          src={webformatURL}
          alt={tags}
          className={css['ImageGalleryItem-image']}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

