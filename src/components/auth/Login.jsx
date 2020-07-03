import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/polls' />;
  }
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12 14 offset-14'>
          <div className='card'>
            <div className='card-action teal white-text'>
              <h3>Login</h3>
            </div>
            <div className='card-content'>
              <form onSubmit={onSubmit}>
                <div className='form-field'>
                  <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                    className='validate'
                    required
                  />
                  <label htmlFor='username' className='active'>
                    Username
                  </label>
                </div>
                <br />
                <div className='form-field'>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                    className='validate'
                    minLength='8'
                    required
                  />
                  <label htmlFor='password' className='active'>
                    Password
                  </label>
                </div>
                <br />
                <div className='form-field'>
                  {/* <button className='btn-large teal'>Login</button> */}
                  <input
                    type='submit'
                    className='btn-large teal'
                    value='Login'
                  />
                </div>
                <br />
              </form>
              <div className='card-action'>
                <p className='my-1'>
                  Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
