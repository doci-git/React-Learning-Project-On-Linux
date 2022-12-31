import React from "react";
import Card from "./Card.js";
import data from "./data.js";

function Main() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                img={item.img}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                state={item.state}
                title={item.title}
                price={item.price}
            />
        );
    });
    return <div className="parent">{cards}</div>;
}
export default Main;
