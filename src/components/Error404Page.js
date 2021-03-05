import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import errorImg from '../assets/images/searching.svg';
import '../assets/css/ErrorPage.css';

function ErrorPage() {
  return (
    <Router>
      <div className="error-page">
        <div className="container">
          <div className="error-img"><img src={errorImg} alt="error" /></div>
          <h1>404</h1>
          <p>sorry, the page you are looking for cannot be found</p>
          <Link to="/" className="btn">back home</Link>

        </div>
      </div>
    </Router>

  );
}

export default ErrorPage;
