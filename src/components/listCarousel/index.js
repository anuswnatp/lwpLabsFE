import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import styles from "./styles.module.scss"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 5000, min: 1500 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 4
    },
    mediumtab: {
        breakpoint: { max: 1024, min: 700 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 700, min: 480 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 480, min: 0 },
        items: 1
    }
};
function ListCarousel({children}) {
    return (
        <Carousel
            removeArrowOnDeviceType={["mediumtab", "tablet", "mobile"]}
            containerClass={styles.carouselContainer}
            itemClass={styles.itemContainer}
            infinite={true}
            responsive={responsive}>
                {children}
            </Carousel>
    )
}

export default ListCarousel
