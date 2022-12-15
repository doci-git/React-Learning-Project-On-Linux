import React from "react";
function Main(props) {
    return (
        <div className="card">
            <img src="./images/card-1.jpg" alt="" className="card-image" />
            <div className="card-stats">
                <img src="" alt="" className="card-star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>
                <span className="bold">From $136</span> / person
            </p>
        </div>
    );
}
export default Main;
