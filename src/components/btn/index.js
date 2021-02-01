import {Button} from "@chakra-ui/react"

import React from 'react'
import Styles from "./styles.module.scss"
function Btn({children,onClick,size="lg",primary}) {
    return (
        <Button
        className={Styles.btn}
        width="fit-content"
        bg={primary?"primary.100":"primary.300"}
        onClick={()=>onClick()}
        size={size}
        colorScheme="blue"
        >
            {children}
        </Button>
    )
}

export default Btn
