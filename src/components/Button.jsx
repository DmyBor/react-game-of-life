import React, { Component } from 'react';

import '../styles/button.css';

class Button extends Component {

  render () {
    return (
      <button className="button">
        {this.props.value}
      </button>
    );
  }
}

export default Button;