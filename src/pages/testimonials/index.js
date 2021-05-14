import React,{useEffect,useState} from 'react'
import { Box, Center,Text } from '@chakra-ui/layout'
import { Testimonials } from '../home'
import { getTestimonials } from '../../../services/api/testimonials.api'
import { Spinner } from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc"
import { Col, Row } from 'react-bootstrap';
function TestimonialPage() {
    const [reviews,setReviews]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        // console.log("lol");
        getTestimonials().then(data=>{
            setReviews(data.data)
            setLoading(false)
        }).catch(err=>{
            console.log(err);
            setReviews([])
            setLoading(false)
        })
    }, [])
    return (
            <div style={{padding:"20px", minHeight:"75vh", width:"100%"}}>
             <>
            <Row>
                <Col md={10}>
            <Center ml={[0,"20%"]}>
            <Text as="h1" textAlign="center" color="purple.600" fontSize="2em" fontWeight="600">
                All Testimonials
            </Text>
            </Center>
            </Col>
            <Col md={2}>
            <Box style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
                // float:"right"
            }}>
            <FcGoogle size="2em"/>
            <a
            style={{color:"#6f42c1",marginLeft:"5px",fontSize:"14px"}}
            target="_blank"
            href="https://www.google.com/search?hl=en-IN&gl=in&q=LearnWithProjects.com,+La+Gardenia,+140/lg+Pragathi+Enclave+Colony,+Miyapur,+Telangana+500049&ludocid=6357780336637525232&lsig=AB86z5WmJt7gpsjLPAXH_hUCPbWe#lrd=0x3bcb93a78eec355d:0x583b5f87fd3e3cf0,1"
            >Read all Google Reviews</a>
            </Box>
            </Col>
            </Row>
            {
                loading?
               <Center>
                    <Spinner color="#6118de" style={{ margin: "auto" }} />
               </Center> :
                <Testimonials data={reviews}/>
            }
            </>
        </div>
    )
}

export default TestimonialPage
