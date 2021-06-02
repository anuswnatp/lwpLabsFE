import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsStarFill } from "react-icons/bs"
import styles from "./styles.module.scss"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import lwplabs from "../../images/lwpLabs.png"
// import { Image } from 'react-bootstrap'
// Sample card from Airbnb

export default function CourseCard({
    imageUrl,
    imageAlt,
    title,
    rating,
    formattedPrice,
    instructor,
    latestBatch
}) {
    const course = {
        imageUrl: imageUrl || "https://bit.ly/2Z4KKcF",
        imageAlt: imageAlt || "Rear view of modern home with pool",
        instructor: instructor || "Demo",
        baths: 2,
        title: title || "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: `₹ ${formattedPrice}` || "$1,900.00",
        reviewCount: 34,
        rating: rating || 4,
    }
    function getDate(date) {
        let a=new Date(date)
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var mins = a.getMinutes();
        let min= mins>0?mins:`00`
        var time = date + ' ' + month + ' ' + year + ' @' + hour + ':' + min + " IST";
        return time;
    }
    return (
        <Box maxW="19rem" borderWidth="1px" borderRadius="15px" overflow="hidden" className={styles.card}
            as="button"
            onClick={() => { }}
        >
            <Image src={course.imageUrl} alt={course.imageAlt} fallbackSrc={lwplabs} />

            <Box p="6" bgColor="boxColor" height="10em">
                <div className={styles.info}>
                    <Box d="flex" alignItems="baseline">
                        <Box as="span" fontSize={13}>
                            {course.instructor}
                        </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        // isTruncated
                        // height="10em"
                        whiteSpace="break-spaces"
                    >
                        {course.title}
                    </Box>

                    <Box as="p">
                        {course.formattedPrice}
                    </Box>

                    <Box d="flex" mt="2" justifyContent="center" textAlign="center" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                                i < course.rating ?
                                    <AiFillStar key={i} color="#ffd166" />
                                    :
                                    <AiOutlineStar
                                        key={i}
                                        color="#333533"
                                    />
                            ))}
                    </Box>
                </div>
                {latestBatch ? <Box className={styles.batch}>
                    <Text>Upcoming Batches</Text>
                    <Text fontWeight="600">Start Date: {`${getDate(latestBatch.startdate)}`}</Text>
                    <Text fontWeight="600">End Date: {`${getDate(latestBatch.endDate)}`}</Text>
                </Box> : <Box className={styles.batch}>
                    <Text>Upcoming Batches</Text>
                    <Text>Comming Soon</Text>
                </Box>}
            </Box>
        </Box>
    )
}
