import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast('Enter your request');
      return;
    }
    this.props.handleFormSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css['Searchbar']}>
        <form className={css['SearchForm']} onSubmit={this.handleSubmit}>
          <button type="submit" className={css['SearchForm-button']}>
            <ImSearch style={{ fontSize: 30 }}>Search</ImSearch>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;