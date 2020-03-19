import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root");

const Hello = () => {
  return <div> Hello there! </div>;
};

ReactDOM.render(<Hello />, root);
