import Styles from "./styles.module.scss"
import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import slide1 from "../../images/2220.jpg"
import slide2 from "../../images/2943.jpg"
import slide3 from "../../images/4701915.jpg"
const items = [
    {
        src: slide1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: slide3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const CustomCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className={Styles.items}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img className={Styles.slides} src={item.src} alt={item.altText} />
                {/* <CarouselCaption className={Styles.captions} captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    return (
        <div>
            <div id={Styles.overlay}></div>
            <Carousel
            className={Styles.customCarousel}
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators className={Styles.indicators} items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className={Styles.controls} direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl className={Styles.controls} direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
        </div>
    );
}

export default CustomCarousel;