import React from 'react'
import { Button, Text, Box, Stack} from "@chakra-ui/react"
import Styles from "./styles.module.scss"
import { Link } from 'gatsby';
const MenuItems = ({ children, isLast, to = "/", ...rest }) => (
    <Link className={Styles.menuLinks} to={to}>
        <Text
            display="block"
            {...rest}>
            {children}
        </Text>
    </Link>
);
function MenuLinks({ show }) {
    return (
        <Box
            display={{ sm: show ? "block" : "none", md: "block" }}
            flexBasis={{ sm: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 0, 0, 0]}
            >
                <MenuItems>About us</MenuItems>
                <MenuItems>Courses</MenuItems>
                <MenuItems>Testimonials</MenuItems>
                <Link className={Styles.loginButton} style={{textDecoration:"none"}} to="/Login">
                <Button  bg={["transparent","primary.100"]} border="1px" color={["#fff"]}>
                    Login
                </Button>
                </Link>
            </Stack>
        </Box>
    )
}

export default MenuLinks
