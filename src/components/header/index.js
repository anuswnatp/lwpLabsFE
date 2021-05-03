import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import MenuLinks from "./menulinks"
import Styles from "./styles.module.scss"
import Logo from "./logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCloseCircle } from "react-icons/ai"
const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            className={Styles.navBarContainer}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={0}
            p={5}
            position="sticky"
            zIndex={90}
            top={-1}
            bg={["primary.100", "primary.100", "rgba(255, 255, 255, .8)", "rgba(255, 255, 255, .8)"]}
            color={["white", "white", "primary.100", "primary.100"]}
            {...props}
        >
            <Logo />
            <Box style={Styles.burger} onClick={handleToggle}>
                {show ? <AiOutlineCloseCircle size={25} /> : <GiHamburgerMenu />}
            </Box>
            <MenuLinks show={show} />
        </Flex>
    );
};

export default Header;
