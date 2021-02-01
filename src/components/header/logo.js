import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"

export default function Logo(props) {
    return (
        <Box {...props}>
            <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                LWP Labs
            </Heading>
        </Box>
    )
}
