import React, { Component } from 'react';

import '../styles/bottommenu.css';

import Button from './Button.jsx';
import constants from './Constants.jsx';

class BottomMenu extends Component {
  render() {
    return (
        <div className="bottom-menu">
          <div className="bottom-menu__header">
            <span className="bottom-menu__text">Board Size:</span>
            <Button
              value="Size: 50x30"
              className={this.props.bottomButtons.header === constants.smallField ? 'active' : ''}
              onClick={() => this.props.changeField(50, 30)}
            />
            <Button
              value="Size: 70x50"
              className={this.props.bottomButtons.header === constants.mediumField ? 'active' : ''}                      
              onClick={() => this.props.changeField(70, 50)}              
            />
            <Button             
              value="Size: 100x80"
              className={this.props.bottomButtons.header === constants.largeField ? 'active' : ''}
              onClick={() => this.props.changeField(100, 80)}              
            />
          </div>
          <div className="bottom-menu__footer">
            <span className="bottom-menu__text">Sim Speed:</span>
            <Button
              value="Slow"
              className={this.props.bottomButtons.footer === constants.slowButton ? 'active' : ''}
              onClick={() => this.props.changeSpeed(constants.slow)}              
            />
            <Button
              value="Medium"
              className={this.props.bottomButtons.footer === constants.mediumButton ? 'active' : ''}
              onClick={() => this.props.changeSpeed(constants.medium)}              
            />
            <Button
              value="Fast"
              className={this.props.bottomButtons.footer === constants.fastButton ? 'active' : ''}
              onClick={() => this.props.changeSpeed(constants.fast)}                            
            />
          </div>
        </div>
    );
  }
}

 export default BottomMenu;