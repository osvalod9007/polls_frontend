import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import encuetas from '../../img/encuetas.jpg';
import statistics from '../../img/encuesta-estadistica.jpg';
import contact from '../../img/ecuesta-2.jpg';
import Footer from './Footer';
import Contacts from './Contacts';

import M from 'materialize-css/dist/js/materialize.min.js';

const Landing = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <div id='index-banner' className='parallax-container'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <br />
            <h1 className='header center text-lighten-2'>Poll Manager</h1>
            <div className='row center'>
              <h4 className='header col s12'>
                Manage surveys. Feel free to vote, Create your poll and see what
                others think
              </h4>
            </div>
            <div className='row center'>
              <Link
                to='login'
                id='download-button'
                className='btn-large waves-effect waves-light teal lighten-1'
                style={{ margin: '0.2rem' }}
              >
                Sign in
              </Link>
              <Link
                to='/register'
                id='download-button'
                className='btn-large waves-effect waves-light teal lighten-1'
                style={{ margin: '0.2rem' }}
              >
                Sign up
              </Link>
            </div>
            <br />
          </div>
        </div>
        <div className='parallax' style={imageStyle}>
          <img src={encuetas} alt='' className='responsive-img ' />
        </div>
      </div>
      <div className='container'>
        <div className='section'>
          {/* Icon Section    */}
          <div className='row'>
            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>flash_on</i>
                </h2>
                <h5 className='center'>Speeds up development</h5>

                <p className='light'>
                  We did most of the heavy lifting for you to provide a default
                  stylings that incorporate our custom components. Additionally,
                  we refined animations and transitions to provide a smoother
                  experience for developers.
                </p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>group</i>
                </h2>
                <h5 className='center'>User Experience Focused</h5>

                <p className='light'>
                  By utilizing elements and principles of Material Design, we
                  were able to create a framework that incorporates components
                  and animations that provide more feedback to users.
                  Additionally, a single underlying responsive system across all
                  platforms allow for a more unified user experience.
                </p>
              </div>
            </div>

            <div className='col s12 m4'>
              <div className='icon-block'>
                <h2 className='center brown-text'>
                  <i className='material-icons'>settings</i>
                </h2>
                <h5 className='center'>Easy to work with</h5>

                <p className='light'>
                  We have provided detailed documentation as well as specific
                  code examples to help new users get started. We are also
                  always open to feedback and can answer any questions a user
                  may have about Materialize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='parallax-container valign-wrapper'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <div className='row center'>
              <h4 className='header col s12 '>
                An application where you can monitor your polls.
              </h4>
            </div>
          </div>
        </div>
        <div className='parallax' style={imageStyle}>
          <img src={statistics} alt='' className='responsive-img ' />
        </div>
      </div>
      <Contacts />
      <div className='parallax-container valign-wrapper'>
        <div className='section no-pad-bot'>
          <div className='container'>
            <div className='row center'>
              <h5 className='header col s12'>
                Contact us and you will be well attended
              </h5>
            </div>
          </div>
        </div>
        <div className='parallax' style={imageStyle}>
          <img src={contact} alt='' className='responsive-img ' />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

const imageStyle = {
  opacity: 0.6,
};

export default Landing;
