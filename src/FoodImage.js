import React, { Component } from 'react'

class FoodImage extends Component {

  render() {
    return (
      <div >	      
	    <div className="image">
	       <img src={this.props.foodImage} alt="foodImage" />  
	    </div>
      </div>
    );
  }
}

export default FoodImage;