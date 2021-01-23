import { Box } from '@chakra-ui/react'
import React from 'react'
import BannerCarousel from '../../components/carousel'
import CourseCard from '../../components/courseCard'

function Home() {
    return (
        <div>
            <BannerCarousel/>
            <Box p={5}>
            <CourseCard/>
            </Box>
        </div>
    )
}

export default Home
