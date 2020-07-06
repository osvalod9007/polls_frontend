import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PollItem from './PollItem';
import { getPolls } from '../../actions/poll';

const Polls = ({ getPolls, poll: { polls } }) => {
  useEffect(() => {
    getPolls();
  }, [getPolls]);
  console.log(polls);
  return (
    <Fragment>
      <div className='row'>
        {polls.map((poll) => (
          <PollItem key={poll._id} poll={poll} />
        ))}
      </div>
    </Fragment>
  );
};

Polls.propTypes = {
  getPolls: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  poll: state.poll,
});

export default connect(mapStateToProps, { getPolls })(Polls);
