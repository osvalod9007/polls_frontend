import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addVote } from '../../actions/poll';

const PollItem = ({
  addVote,
  auth,
  poll: { topic, author, status, choices },
}) => {
  const [voteChoice, setVoteChoice] = useState('');
  let totalVotes = 0;
  let isVote = {};
  let voteUser = choices.map((choice) => {
    totalVotes += choice.votes.length;
    return choice.votes.find((vote) => vote.user);
  });

  isVote = choices.find((choice) =>
    choice.votes.find((vote) => vote.user === auth.user._id)
  );

  const onChange = (e) => {
    setVoteChoice(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    addVote(voteChoice);
  };
  return (
    <Fragment>
      <div className='col s4'>
        <div className='card'>
          <div className='card-content Black-text'>
            <span className='card-title'>{topic}</span>
            <h6>Author: {` ${author}`}</h6>
            {!status && !isVote ? (
              <form onSubmit={onSubmit}>
                {choices.map((choice) => (
                  <p key={choice._id}>
                    <label>
                      <input
                        name='group1'
                        type='radio'
                        value={choice._id}
                        checked={voteChoice === choice._id}
                        onChange={onChange}
                      />
                      <span>{choice.value}</span>
                    </label>
                  </p>
                ))}
                <div className='form-field center-aligh'>
                  <input
                    type='submit'
                    className='btn waves-effect waves-teal'
                    value='Vote'
                  />
                </div>
              </form>
            ) : (
              <div>
                {choices.map((choice) => {
                  let voteTemp = choice.votes.length;
                  let vote = (voteTemp / totalVotes) * 100;
                  //   console.log(vote);
                  return (
                    <div key={choice._id}>
                      <span>{choice.value}</span>
                      <div className='progress'>
                        <div
                          className='determinate'
                          style={{
                            width: `${vote}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PollItem.propTypes = {
  poll: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addVote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addVote })(PollItem);
