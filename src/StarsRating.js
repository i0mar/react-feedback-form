import React, { Component } from 'react';
import star from "./images/star.png";
import starFilled from "./images/star2.png";
import store from "./stores";

class StarsRating extends Component {
    handleClick = (event) => {
        store.rating = event.target.name;

        for (let i = 0; i < 5; i++) {
            if (i < store.rating)
                document.getElementsByClassName("star")[i].src = starFilled;
            else
                document.getElementsByClassName("star")[i].src = star;
        }
    };

    displayStars = () => {
        let temp = [];

        for (let i = 1; i <= 5; i++) {
            temp.push(<img className="star" alt={i} name={i} key={i} src={star} width="50px" height="50px" onClick={this.handleClick}/>);
        }

        return temp;
    };

    render() {
        return (
            <div>
                {this.displayStars()}
            </div>
        );
    };
};

export default StarsRating;