import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Btn from '../btn'
import styles from "./styles.module.scss"
function BatchCard({
    course,
    startDate,
    endDate,
    strength,
    instructor,
    id,
    key
}) {
    function getDate(date) {
        let a=new Date(date)
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var time = date + ' ' + month + ' ' + year + ' @' + hour + ':' + min + ` ${hour>12?`AM `:`PM `}` + " IST";
        return time;
    }
    return (
        <Flex maxW="19rem" minH="19rem" borderWidth="1px"
            borderRadius="15px" overflow="hidden"
            direction="column"
            justifyContent="space-evenly"
            bg="boxColor"
            pb="10px"
            pt="10px"
            className={styles.batchContainer}>
            <Text textAlign="center" fontSize="1.05em" fontWeight="800 !important" color="primary.100">{course.name}</Text>
            <Box
            whiteSpace="break-spaces"
            padding="0 20px" fontWeight="600" color="highlighter.100">
                <Text color="primary.200">From</Text>
                <Text>{getDate(startDate)}</Text>
                <Text color="primary.200">to</Text>
                <Text>{getDate(endDate)}</Text>
                {/* <Box d="flex"><Text color="primary.200">Course: </Text> <Text>{course.name}</Text></Box> */}
                <Text color="primary.200">By</Text>
                <Text>{instructor.name}</Text>
                <Box mb="10px" color="primary.100" d="flex"><Text>Capacity: </Text><Text>{strength}</Text></Box>
            </Box>
            <Btn primary>Enroll</Btn>
        </Flex>
    )
}

export default BatchCard
