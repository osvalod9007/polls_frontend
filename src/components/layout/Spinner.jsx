import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <Fragment>
      <div className='progress blue lighten-4'>
        <div className='indeterminate blue' />
      </div>
    </Fragment>
  );
};

export default Spinner;
