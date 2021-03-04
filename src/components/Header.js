import React from 'react';
import PropTypes from 'prop-types';
// `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;

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
        <div className="text-center">
          {children}
        </div>
      </header>

    </>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;