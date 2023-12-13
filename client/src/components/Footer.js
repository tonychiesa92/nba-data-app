// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      Project By: <a href="https://tonychiesa.com/" target="_blank"
        rel="noreferrer">Tony Chiesa</a>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  marginTop: '20px', // Add top margin to create space between content and footer
  width:'100%',
};

export default Footer;