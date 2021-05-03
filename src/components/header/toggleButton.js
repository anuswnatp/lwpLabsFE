import React from "react"
import { Box , MenuToggle} from "@chakra-ui/react"

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={['block','none']} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    )
}
