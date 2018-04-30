import React, { Component } from 'react';

import '../styles/topmenu.css';

import Button from './Button.jsx';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <Button 
          value="Run"
        />
        <Button 
          value="Pause"
        />
        <Button 
          value="Clear"
        />
        <span className="top-menu__text">Generation: 0</span>
      </div>
    );
  }
}

export default TopMenu;