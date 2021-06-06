import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import MenuLinks from "./menulinks"
import Styles from "./styles.module.scss"
import Logo from "./logo"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineCloseCircle } from "react-icons/ai"
import gfm from 'remark-gfm'
import { GiCancel} from "react-icons/gi"
import styles from "../../Layout/styles.module.scss"
const ReactMarkdown = require('react-markdown')

const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () =>{ setShow(!show) };
    return (
        <>
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
            <Box display={['block','none']} onClick={()=>handleToggle()}>
                {show ? <AiOutlineCloseCircle size={25} /> : <GiHamburgerMenu />}
            </Box>
            <MenuLinks show={show} handleToggle={()=>handleToggle()} />
        </Flex>
        {props.isOpen && props.msg && <Box width="100%"
                minHeight="40px"
                d="flex"
                p="0 15px"
                alignItems="center"
                bg="linear-gradient(126deg,#f5a623,#f76b1c)"
                className={styles.offerParent}
            >
                <Box
                flex="2"
                bg="transparent"
                color="#fff"
                w="100%"
                className={styles.offerWrapper}
                >
                    <ReactMarkdown plugins={[gfm]} children={props.msg}/>
                </Box>
                <GiCancel onClick={()=>props.setOpen(false)} color="#fff" size={20}/>
            </Box>}
        </>
    );
};

export default Header;
