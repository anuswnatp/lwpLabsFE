import React from 'react'
import { Button, Text, Box, Stack, Center} from "@chakra-ui/react"
import Styles from "./styles.module.scss"
import { Link } from 'gatsby';
import "../../pages/global.scss"
import Btn from '../btn';
import { useDispatch } from 'react-redux';
import { modal } from '../../../services/redux/actions/courses';
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
    const dispatch = useDispatch()
    return (
        <Box
            display={[show ? "block" : "none","block"]}
            flexBasis={["100%","auto"]}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 0, 0, 0]}
            >
                {/* <MenuItems>About us</MenuItems> */}
                <MenuItems to="/courses">Courses</MenuItems>
                <MenuItems to="/testimonials">Testimonials</MenuItems>
                {/* <Link className={Styles.loginButton} style={{textDecoration:"none"}} to="/Login"> */}
                <MenuItems>
                <Center>
                <Btn size="lg"
                    onClick={()=>dispatch(modal("free-demo"))}
                    bgColor="linear-gradient(126deg,#f5a623,#f76b1c)"
                    style={{ margin: "8px 0", width: "75%" }}
                  ><Text p="15px">Request Demo</Text></Btn>
                </Center>
                </MenuItems>
                {/* <Button
                className={Styles.btn}
                bg={["transparent","primary.100"]} border={["1px","1px","none","none"]} borderRadius="30px" color={["#fff"]}>
                    Request a Call
                </Button> */}
                {/* </Link> */}
            </Stack>
        </Box>
    )
}

export default MenuLinks
