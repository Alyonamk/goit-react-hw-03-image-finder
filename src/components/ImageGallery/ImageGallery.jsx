import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/';

import css from './ImageGallery.module.css';

export default function ImageGallery({ searchResult }) {
  return (
    <ul className={css['ImageGallery']}>
      {searchResult.map(img => (
        <ImageGalleryItem
          key={img.id}
          tags={img.tags}
          webformatURL={img.webformatURL}
          largeImageURL={img.largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  searchResult: PropTypes.array.isRequired,
};