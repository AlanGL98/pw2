import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        src: require ('../img/Fortnite.jpg'),
        altText: 'Fortnite',
        caption: 'Juego muy chido',
        key: 1,
    },
    {
        src: require ('../img/Minecraft.jpg'),
        altText: 'Minecraft',
        caption: 'Juego chido',
        key: 2,
    },
    {
        src:  require ('../img/LOL.jpg'),
        altText: 'League of Legends',
        caption: 'Juego feo',
        key: 3,
    }
];

function Cargar(args){
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 :activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map ((item) => {
        return (
            <CarouselItem
                onExiting = {() => setAnimating(true)}
                onExited = {() => setAnimating(false)}
                key = {item.src}            
            >
                <img src={item.src} alt={item.altText} width="100%" height="600px" />
                <CarouselCaption 
                    captionText = {item.caption}
                    captionHeader = {item.caption}
                />
            </CarouselItem>
        );
    
    });

    return(
        <Carousel
            activeIndex = {activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items = {items}
                activeIndex = {activeIndex}
                onClickHandler = {goToIndex}
            />
            {slides}

            <CarouselControl 
                direction = "prev"
                directionText = "Previous"
                onClickHandler = {previous}
            />
            <CarouselControl 
                direction = "next"
                directionText = "Next"
                onClickHandler = {next}
            />
        </Carousel>
    )
}

export default Cargar;