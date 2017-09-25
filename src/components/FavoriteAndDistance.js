import React, { Component } from 'react'
import grayHeart from '../images/gray-heart.png';


class FavoriteAndDistance extends Component {

  render() {
    return (
      <div>
        <img src={grayHeart} className="heart" alt="heart" />
        <div className="distance"> {this._getDistanceFromLatLngInKm(this.props.currLat,
                                                                    this.props.currLng,
                                                                    this.props.destLat,
                                                                    this.props.destLng)} </div>
      </div>
    )
  }  

  _getDistanceFromLatLngInKm(currLat, currLng, destLat, destLng) {
    
    const R = 6371; // Radius of the earth in km
    let dLat = this._deg2rad(destLat-currLat);  // this._deg2rad below
    let dLng = this._deg2rad(destLng-currLng); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this._deg2rad(currLat)) * Math.cos(this._deg2rad(destLat)) * 
      Math.sin(dLng/2) * Math.sin(dLng/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return this._getDistanceInString(d);
  }

  _deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  /* Get the distance in meter or kilometer */
  _getDistanceInString(d) {   
    if(d % 10 <= 0){
      let distance = d * 1000
      return `${parseInt(distance, 10)} ม.`
    }
    else {
      return `${parseInt(d, 10)} กม.` 
    }
  }
}

export default FavoriteAndDistance;