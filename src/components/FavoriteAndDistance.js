import React, { Component } from 'react'
import grayHeart from '../images/gray-heart.png';


class FavoriteAndDistance extends Component {

  render() {
    return (
      <div>
        <img src={grayHeart} className="heart" alt="heart" />
        <div className="distance"> {this._getDistanceFromLatLonInKm(this.props.currLat,
                                                                    this.props.currLng,
                                                                    this.props.destLat,
                                                                    this.props.destLng)} </div>
      </div>
    )
  }

  /* Get the distance in meter or kilometer */
  _getDistanceInString(d) {   

    if(d % 10 <= 0){
      let distance = d * 1000
      return `${parseInt(distance)} ม.`
    }
    else {
      return `${parseInt(d)} กม.` 
    }
  }

  _getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    let dLat = this._deg2rad(lat2-lat1);  // this._deg2rad below
    let dLon = this._deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this._deg2rad(lat1)) * Math.cos(this._deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return this._getDistanceInString(d);
  }

  _deg2rad(deg) {
    return deg * (Math.PI/180)
  }
}

export default FavoriteAndDistance;