import React from 'react'
import { FormControl, Flex, Box, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter } from "@chakra-ui/react"
import Btn from "./btn"
function Form({
    isOpen,
    onClose,
    onOpen,
    btnText
}) {
    const [formDetails, setformDetails] = React.useState({ fName: "", lName: "", email: "" })
    React.useEffect(()=>{
        setformDetails({ fName: "", lName: "", email: "" })
    },[])
    return (
        <>
            <Modal borderRadius="15px" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="#1e1e1e61" />
                <ModalContent>
                    <ModalHeader borderRadius="5px 5px 0 0" backgroundImage={"linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)"} color="#fff">Reach to us</ModalHeader>
                    <ModalCloseButton color="#fff" />
                    <ModalBody>
                        <Flex>
                        <FormControl value={formDetails.fName} onChange={(e)=>setformDetails(p=>({...p,fName:e.target?.value}))} color="primary.100" id="fName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input  borderColor="highlighter.100" placeholder="First name" type="text" />
                        </FormControl>
                        <Box w="15px" />
                        <FormControl value={formDetails.lName} onChange={(e) => setformDetails(prev => ({ ...prev, lName: e.target?.value }))} color="primary.100" id="lName" isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input  borderColor="highlighter.100" placeholder="Last name" type="text" />
                        </FormControl>
                        </Flex>
                        <FormControl value={formDetails.email} onChange={(e) => setformDetails(p => ({ ...p, email: e.target?.value }))} color="primary.100" id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input  borderColor="highlighter.100" placeholder="Email" type="email" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Btn onClick={()=>console.log("hello")}>Enquire</Btn>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Form
