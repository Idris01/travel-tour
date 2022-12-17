import React from "react";
import Location from "../src/assets/location.svg"

export default function Destination(props){
  return (
    <div className="destination">
      <img className="destination--img" src={props.imageUrl} alt="" />
      <div className="destination--details">
        <div className="location">
          <img src={Location} />
          <span className="location--country">{props.location} </span>
          <span className="location--map"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
        </div>
        <h1 className="destination--title">{props.title}</h1>
        <div className="destination--date">
          <span className="destination--startdate">{props.startDate}</span> -
          <span className="destination--enddate">{props.endDate}</span>
        </div>
        <p className="destination--description">{props.description}</p>
      </div>
      
    </div>
  )
}