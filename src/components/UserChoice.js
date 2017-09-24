import React, { Component } from 'react'
import wongnaiLogo from '../images/wongnai-badge.png';


class UserChoice extends Component {

  render() {
  	/* Check if it is a users' choice or not */
    let userChoiceButton

    if(this.props.isUserChoice){
      /* If so -> show a button */
      userChoiceButton = (<button type="button" className="choiceButton">
                            <img src={wongnaiLogo} className="logo" alt="logo" />
                            <span className="choice">USERS' CHOICE 2017</span>
                          </button>)
    }
    
    return (
      <div >
        {userChoiceButton}
      </div>
    )
  }
}

export default UserChoice;