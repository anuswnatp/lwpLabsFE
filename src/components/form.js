import React from 'react'
import { FormControl,
    FormHelperText,
    Flex, 
    Box, 
    FormLabel, 
    Input, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    ModalFooter } from "@chakra-ui/react"
import Btn from "./btn"
import axiosInstance from "../../axiosConfig"
import Cogo from "cogo-toast"
function Form({
    isOpen,
    onClose,
    onOpen,
    btnText="Enquire"
}) {
    return (
        <>
            <Modal borderRadius="15px" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg="#1e1e1e61" />
                <ModalContent className="modalContainer">
                    <ModalHeader borderRadius="5px 5px 0 0" backgroundImage={"linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)"} color="#fff">Reach to us</ModalHeader>
                    <ModalCloseButton color="#fff" className="modalCross" />
                    <ModalBody>
                        <FormHolders onClose={onClose} btnText={btnText}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Form

export const FormHolders =({onClose,btnText='Enquire',getback=false,form=false,title})=>{
    const [formDetails, setformDetails] = React.useState({ fName: "", lName: "", email: "",phone:"" })
    const [err, seterr] = React.useState({ fName: "", lName: "", email: "",phone:"" })
    React.useEffect(()=>{
        setformDetails({ fName: "", lName: "", email: "",phone:"" })
    },[])
    const reset=()=>{
        setformDetails({ fName: "", lName: "", email: "",phone:"" })
        seterr({ fName: "", lName: "", email: "",phone:"" })
    }
    React.useEffect(()=>{
        reset()
    },[])
    const createEnquiry= async()=>{
        await axiosInstance.post("/enquiries",{
            "name":`${formDetails.fName} ${formDetails.lName}`,
            "email":`${formDetails.email}`,
            "phone":`${formDetails.phone}`,
            "batch":`${title || ''}`
        }).then(()=>{
            Cogo.success("We will Reach out to you within 24hrs :)")
        }).catch((err)=>Cogo.error(err.message))
    }
    const submit=()=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(formDetails.fName==="" || formDetails.lName==="" || formDetails.email ==="" || formDetails.phone ===""){
            let errrs=JSON.parse(JSON.stringify(err))
            if(formDetails.fName==="")errrs.fName="First Name can't be Empty"
            if(formDetails.lName==="")errrs.lName="Last Name can't be Empty"
            if(formDetails.email==="")errrs.email="Email can't be Empty"
            if(formDetails.phone==="")errrs.phone="Contact number Name can't be Empty"
            seterr(errrs)
        }
        if( !re.test(String(formDetails.email).toLowerCase()) && formDetails.email!==""){
            seterr(p=>({...p,email:"Invalid Email Id"}))
        }
        else if(formDetails.phone.length < 6){
            seterr(p=>({...p,phone:"Invalid Phone number"}))
        }else{
            createEnquiry()
            reset()
            !form && onClose()
        }
    }
    return <div>
        <Flex>
    <FormControl mb="5px" value={formDetails.fName} onChange={(e)=>{
        e.persist()
        let reg= new RegExp("^[a-zA-Z ]*$")
        if(!reg.test(e.target.value)) seterr(p=>({...p,fName:"Invalid Name"}))
        else seterr(p=>({...p,fName:""}))
        setformDetails(p=>({...p,fName:e.target?.value}))}} color="primary.100" id="fName" isRequired>
        <FormLabel>First Name</FormLabel>
        <Input  borderColor="highlighter.100" placeholder="First name" type="text" />
        <FormHelperText color="#9c3848">{err.fName}</FormHelperText>
    </FormControl>
    <Box w="15px" />
    <FormControl mb="5px" value={formDetails.lName} onChange={(e) => {
        e.persist()
        let reg= new RegExp("^[a-zA-Z ]*$")
        if(!reg.test(e.target.value)) seterr(p=>({...p,lName:"Invalid Name"}))
        else seterr(p=>({...p,lName:""}))
        setformDetails(prev => ({ ...prev, lName: e.target?.value }))}} color="primary.100" id="lName" isRequired>
        <FormLabel>Last Name</FormLabel>
        <Input  borderColor="highlighter.100" placeholder="Last name" type="text" />
        <FormHelperText color="#9c3848">{err.lName}</FormHelperText>
    </FormControl>
    </Flex>
    <FormControl mb="5px" value={formDetails.email} onChange={(e) => {
        e.persist()
        seterr(p=>({...p,email:""}))
        setformDetails(p => ({ ...p, email: e.target?.value }))}} color="primary.100" id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input  borderColor="highlighter.100" placeholder="Email" type="email" />
        <FormHelperText color="#9c3848">{err.email}</FormHelperText>
    </FormControl>
    <FormControl mb="5px" value={formDetails.phone} maxLength={10} onChange={(e) => {
        e.persist()
        seterr(p=>({...p,phone:""}))
        if (e.target?.value.length <= Number.parseInt(e.target.maxLength))
        setformDetails(p => ({ ...p, phone: e.target?.value }))}} color="primary.100" id="phone" isRequired>
        <FormLabel>Contact Number</FormLabel>
        <Input value={formDetails.phone}  borderColor="highlighter.100"
        placeholder="Phone" maxLength="10" type="number" />
        <FormHelperText color="#9c3848">{err.phone}</FormHelperText>
    </FormControl>
    <Box float='right'>
    <Btn onClick={()=>submit()}>{btnText}</Btn>
    </Box>
    </div>
}