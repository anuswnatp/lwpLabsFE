import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { graphql, navigate, useStaticQuery } from "gatsby"
import Styles from "./styles.module.scss"
import GatsbyImage from "gatsby-image"
import logo from "../../images/logo.png"
export default function Logo(props) {
    return (
        <Box {...props}>
            {/* <Heading
            cursor="pointer"
            onMouseDown={()=>navigate("/")}
            onTouchStart={()=>navigate("/")}
            as="h1"
            size="lg"
            letterSpacing={"-.1rem"}>

            </Heading> */}
            <div
            onMouseDown={()=>navigate("/")}
            onTouchStart={()=>navigate("/")}
            style={{
                maxHeight:"4em",
                maxWidth:"5em",
                display:'flex',
                cursor:"pointer"
            }}>
            <img src={logo} style={{objectFit:'contain'}}/>
            <Text
            fontSize="14px"
            textAlign="center"
            className={Styles.logoText}
            >
                Learn with Projects
            </Text>
            </div>
        </Box>
    )
}
