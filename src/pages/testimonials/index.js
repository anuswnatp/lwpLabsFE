import React,{useEffect,useState} from 'react'
import { Center,Text } from '@chakra-ui/layout'
import { Testimonials } from '../home'
import { getTestimonials } from '../../../services/api/testimonials.api'
import { Spinner } from "@chakra-ui/react";
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
            <Center>
            <Text as="h1" textAlign="center" color="purple.600" fontSize="2em" fontWeight="600">
                All Testimonials
            </Text>
            </Center>
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
