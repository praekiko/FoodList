import React, { Component } from 'react'
import wongnaiLogo from '../images/wongnai-badge.png';


class UserChoice extends Component {

  render() {
    
    return (
      <div >
        <button type="button" className="choiceButton">
          <img src={wongnaiLogo} className="logo" alt="logo" />
          <span className="choice">USERS' CHOICE 2017</span>
        </button>
      </div>
    )
  }
}

export default UserChoice;