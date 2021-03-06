import React from 'react';
import { useSpring, animated } from 'react-spring';
import css from "./src/carousel.css";

function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div class="g-card-info style" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo;
