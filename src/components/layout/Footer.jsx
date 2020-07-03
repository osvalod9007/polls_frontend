import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer teal'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright PollManager{' '}
          <a
            className='brown-text text-lighten-3'
            href='http://materializecss.com'
          >
            Materialize
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
