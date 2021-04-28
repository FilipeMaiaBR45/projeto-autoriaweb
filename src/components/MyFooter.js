import React from 'react';

// import { Container } from './styles';

function MyFooter() {
  return (
    <footer
      id="footer"
      className="footer mt-auto py-3"
      style={{ backgroundColor: '#2f3a60' }}
    >
      <div
        className="container d-flex justify-content-center "
        style={{ color: 'white' }}
      >
        <p>© Filipe Maia - Bald Eagle.corp ©</p>
      </div>
    </footer>
  );
}

export default MyFooter;
