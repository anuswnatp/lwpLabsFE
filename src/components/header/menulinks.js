import React from 'react'
import { Button, Text, Box, Stack} from "@chakra-ui/react"
import Styles from "./styles.module.scss"
import { Link } from 'gatsby';
import "../../pages/global.scss"
const MenuItems = ({ children, isLast, to = "/", ...rest }) => (
    <Link className={`menuLinks`} to={to}>
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
                <MenuItems to="/courses">Courses</MenuItems>
                <MenuItems>Testimonials</MenuItems>
                <Link className={Styles.loginButton} style={{textDecoration:"none"}} to="/Login">
                <Button 
                className={Styles.btn}
                bg={["transparent","primary.100"]} border={["1px","1px","none","none"]} borderRadius="30px" color={["#fff"]}>
                    Login
                </Button>
                </Link>
            </Stack>
        </Box>
    )
}

export default MenuLinks
