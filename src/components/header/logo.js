import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import { navigate } from "gatsby"

export default function Logo(props) {
    return (
        <Box {...props}>
            <Heading 
            cursor="pointer"
            onMouseDown={()=>navigate("/")}
            onTouchStart={()=>navigate("/")}
            as="h1" 
            size="lg" 
            letterSpacing={"-.1rem"}>
                LwpLabs.com
            </Heading>
            <Text 
            fontSize="14px"
            textAlign="center"
            color="highlighter.100">
                Learn with Projects
            </Text>
        </Box>
    )
}
