import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Link } from 'gatsby';
import React from 'react'
import "../../pages/global.scss"
import {SiFacebook,SiGmail,SiInstagram,SiLinkedin,SiSlack} from "react-icons/si"
const MenuItems = ({ children, isLast, to = "/", ...rest }) => (
    <Link target="_blank" className={`menuLinks`} to={to}>
        <Text
            fontSize="14px"
            display="block"
            {...rest}>
            {children}
        </Text>
    </Link>
);
function Footer() {
    const size='1.6em'
    return (
        <Flex as="footer" bg="primary.100" minHeight="150px" alignItems="end" justifyContent="flex-end" flexDirection="column">
            <Box
                width="100%"
                textAlign="center"
                p="4"
            >
                {/* <Stack
                    spacing={1}
                    color="white"
                    align="center"
                    alignItems={["center", "flex-start", "flex-start", "flex-start"]}
                    direction="column"
                // pt={[4, 0, 0, 0]}
                >
                    <Box textAlign="center">
                        <Text fontWeight="800">Trending Courses</Text>
                        {
                            Array(5).fill("Trending Courses").map((item, key) => <MenuItems key={key}>
                                {item}
                            </MenuItems>)
                        }
                    </Box>
                </Stack> */}
                <Stack
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                direction="row"
                color="#e5e5e5"
                spacing={2}
                pb="10px"
                marginTop="10px"
                >
                        <MenuItems to="https://www.facebook.com/rahul.chaudhuri.7355"><SiFacebook size={size}/></MenuItems>
                        {/* <MenuItems><SiInstagram size={size}/></MenuItems> */}
                        <MenuItems to="https://www.linkedin.com/in/rahul-chaudhuri-619846171/"><SiLinkedin size={size}/></MenuItems>
                        <a className={`menuLinks`} href="mailto:it.trainingwale@gmail.com" target="_blank"><SiGmail size={size}/></a>
                        {/* <MenuItems><SiSlack size={size}/></MenuItems> */}
                </Stack>
                <Text color="white"> All Rights Reserved 2021 | <span style={{ color: "#e5e5e5" }}>LearnwithProjects.com</span></Text>
            </Box>
        </Flex>
    )
}

export default Footer
