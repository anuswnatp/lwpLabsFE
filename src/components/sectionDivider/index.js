import React from 'react'
import {Box} from '@chakra-ui/react'
function SectionDivider({ children }) {
    return (
        <Box
            height={['120px','100px']}
            backgroundImage={"linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)"}
        >
            {children}
        </Box>
    )
}

export default SectionDivider
