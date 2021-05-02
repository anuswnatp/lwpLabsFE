import {Button} from "@chakra-ui/react"

import React from 'react'
import Styles from "./styles.module.scss"
function Btn({children,onClick,size="lg",primary,bgColor, color="#fff", style={color:""}}) {
    return (
        <Button
        style={{...style}}
        className={Styles.btn}
        width="fit-content"
        color={color}
        bg={bgColor?bgColor : primary?"primary.100":"primary.300"}
        onClick={()=>onClick()||null}
        size={size}
        colorScheme="blue"
        >
            {children}
        </Button>
    )
}

export default Btn
