import React, { Component } from 'react';

import '../styles/bottommenu.css';

import Button from './Button.jsx';

class BottomMenu extends Component {
  render() {
    return (
        <div className="bottom-menu">
          <div className="bottom-menu__header">
            <span className="bottom-menu__text">Board Size:</span>
            <Button
              value="Size: 50x30"
            />
            <Button
              value="Size: 70x50"
            />
            <Button
              value="Size: 100x80"
            />
          </div>
          <div className="bottom-menu__footer">
            <span className="bottom-menu__text">Sim Speed:</span>
            <Button
              value="Slow"
            />
            <Button
              value="Medium"
            />
            <Button
              value="Fast"
            />
          </div>
        </div>
    );
  }
}

 export default BottomMenu;