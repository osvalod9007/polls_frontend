import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='right hide-on-med-and-down'>
      <li>
        <Link to='/users'>Uers</Link>
      </li>
      {/* <li>
        <ul id='dropdown1' className='dropdown-content'>
          <li>
            <Link to='/polls'>
              <i className='material-icons'>apps</i>
            </Link>
          </li>
          <li>
            <Link to='/polls'>
              <i className='material-icons'>grid_on</i>
            </Link>
          </li>
        </ul>
        <a className='dropdown-trigger' href='#!' data-target='dropdown1'>
          Polls<i className='material-icons right'>arrow_drop_down</i>
        </a>
      </li> */}
      <li>
        <Link to='/polls'>
          <i className='material-icons'>apps</i>
        </Link>
      </li>
      <li>
        <Link to='/polls'>
          <i className='material-icons'>grid_on</i>
        </Link>
      </li>
      <li>
        <Link to='/' onClick={logout}>
          <i className='material-icons'>remove_circle_outline</i>Logout
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='right hide-on-med-and-down'>
      <li>
        <Link to='/register'>Sign up</Link>
      </li>
      <li>
        <Link to='login'>Sign in</Link>
      </li>
    </ul>
  );
  return (
    <nav className='teal' role='navigation'>
      <div className='nav-wrapper container'>
        <Link to='/' id='logo-container' href='!#' className='brand-logo'>
          <i className='material-icons'>check_box</i>PollManager
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}

        <ul
          id='nav-mobile'
          className='sidenav'
          style={{ backgroundColor: 'rgba(0, 0, 0, .6)' }}
        >
          <li>
            <Link to='/users' className='white-text'>
              Uers
            </Link>
          </li>
          <li>
            <Link to='/polls' className='white-text'>
              Polls
            </Link>
          </li>
          <li>
            <Link to='/register' className='white-text'>
              Sign up
            </Link>
          </li>
          <li>
            <Link to='login' className='white-text'>
              Sign in
            </Link>
          </li>
        </ul>
        <a href='#!' data-target='nav-mobile' className='sidenav-trigger'>
          <i className='material-icons'>menu</i>
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
