import React from "react";

function Card (props) {
    console.log(props);
    return (
        <div className="card">
            <img src= {props.img} alt="" className="card-image" />
            <div className="card-stats">
                <img src="" alt="" className="card-star" />
                <span>{props.star}</span>
                <span className="gray">(6) • </span>
                <span className="gray">{props.state}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
    
}
export default Card