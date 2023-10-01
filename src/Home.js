import React from 'react';
import withCustomProp from './HOC';

function Home(props) {
  return <div>{props.name}</div>;
}

export default withCustomProp(Home, 'this is home componnet');
