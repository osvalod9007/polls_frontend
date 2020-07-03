import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, fullname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ username, fullname, email, password });
    }
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
              <h3>Register</h3>
            </div>
            <div className='card-content'>
              <p>
                <i className='material-icons'>account_box</i> Create Your
                Account
              </p>
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
                    type='text'
                    name='fullname'
                    value={fullname}
                    onChange={onChange}
                    className='validate'
                    required
                  />
                  <label htmlFor='fullname' className='active'>
                    Full Name
                  </label>
                </div>
                <br />
                <div className='form-field'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className='validate'
                    required
                  />
                  <label htmlFor='email' className='active'>
                    Email Address
                  </label>
                </div>
                <br />
                <small className='form-text'>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
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
                  <input
                    type='password'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    className='validate'
                    minLength='8'
                    required
                  />
                  <label htmlFor='password2' className='active'>
                    Confirm Password
                  </label>
                </div>
                <br />
                <div className='form-field center-aligh'>
                  {/* <button className='btn-large teal'>Login</button> */}
                  <input
                    type='submit'
                    className='btn-large teal'
                    value='Register'
                  />
                </div>
                <br />
              </form>
              <div className='card-action'>
                <p className='my-1'>
                  Already have an account? <Link to='/login'>Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
