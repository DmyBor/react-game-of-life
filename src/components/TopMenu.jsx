import React, { Component } from 'react';

import '../styles/topmenu.css';

import Button from './Button.jsx';
import constants from './Constants.jsx';

class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <Button 
          value="Run"
          onClick={this.props.onStart}
          className={this.props.topPanel.button === constants.runButton ? 'active' : ''}
        />
        <Button 
          value="Pause"
          onClick={this.props.onPause}
          className={this.props.topPanel.button === constants.pauseButton ? 'active' : ''}        
        />
        <Button 
          value="Clear"
          onClick={this.props.onClear}
          className={this.props.topPanel.button === constants.clearButton ? 'active' : ''}
        />
        <span className="top-menu__text">Generation: {this.props.topPanel.generation}</span>
      </div>
    );
  }
}

export default TopMenu;