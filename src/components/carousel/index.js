import React, { useEffect, useState } from 'react';
import Styles from "./styles.module.scss"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { getBanners } from "../../../services/api/banners.api";
import { url } from "../../../services/api/api.url";

const CustomCarousel = (props) => {
    useEffect(()=>{
        getAllData()
    },[])
    const[items,setItem]=useState([])
    const getAllData=async()=>{
        let data= await getBanners()
        // console.log(data);
        let carouselData=data.map(i=>({
            src:`${url}${i.images[0].url}`,
            altText:i.images[0].name,
            caption:i.descriptions || null,
            title:i.title|| null,
            link:i.link||null
        }))
        setItem(carouselData)
    }
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
                {(item.caption || item.title) &&  <CarouselCaption className={Styles.captions} captionText={item.caption} captionHeader={item.title} />}
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
