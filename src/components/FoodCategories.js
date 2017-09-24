import React, { Component } from 'react'

class FoodCategories extends Component {

  render() {
    return (
      <span className="category">
        ประเภท {this._getCategory()}
      </span>   
    )
  }

  /* Get category in form of link split with comma */
  _getCategory() {    

    return (this.props.category.map((cat) => <a href={cat.link} className="link" key={cat.id}>{cat.title} </a>)
                               .reduce((prev, curr) => [prev, ' , ', curr]));
  }
}

export default FoodCategories;