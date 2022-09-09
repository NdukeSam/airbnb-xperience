import React from "react";

export default function Card (props) {
    return (
        
        <section className="card"
        style = {{backgroundColor: `${props.bgColor}`}}
        > 

            <div className="card--img"> 
                <img src={props.img} className="" alt="first-card" />
            </div>
            <div className="card--text">
                <div className="rating">
                    <img src={props.star} className="star" alt="star" />
                    <span className="rating--figure">{props.rating}</span>
                    <span className="rating--count grey">{props.reviewCount} • </span>
                    <span className="rating--location grey">{props.country}</span>
                </div>
                <div className="card--name">{props.title}</div>
                <div className="card--price"><span className="bold--price">From {props.currency}{props.price}</span> / person</div>
            </div>
        </section>
    )
}