import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Header.css';

function Header({ children }) {
  return (
    <>
      <header className="header text-center">
        <div className="container">
          <div className="branding">
            <h1 className="logo">
              <span aria-hidden="true" className="icon_documents_alt icon" />
              <span className="text-highlight">Catalog&apos;f</span>
              <span className="text-bold">Pokemons</span>
            </h1>
          </div>
        </div>
        <div className="text-center" data-testid="parent">
          {children}
        </div>
      </header>

    </>
  );
}

Header.propTypes = {
  children: PropTypes.objectOf(Array),
};
Header.defaultProps = {
  children: '',
};

export default Header;
