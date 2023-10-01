import React from 'react';
import Login from './Login';

const withCustomProp = (WrappedComponent, dataReceived) => {
  return function WithCustomProp() {
    if (true) {
      return <WrappedComponent name={dataReceived} />;
    } else {
      return <Login />;
    }
  };
};

export default withCustomProp;
