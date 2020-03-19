import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const root = document.querySelector("#root");

const Hello = (props) => {
  return (
    <div>
      Hello
      { props.name }
      !
    </div>
  );
};

ReactDOM.render(<Hello name="Mike" />, root);
