import React, { useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Box} from "@chakra-ui/react"
import { GiCancel} from "react-icons/gi"
import axiosInstance from "../../axiosConfig"
import gfm from 'remark-gfm'
import { useDispatch, useSelector } from "react-redux"
import BatchModal from "../components/batchModal"
import { modal } from "../../services/redux/actions/courses"
const ReactMarkdown = require('react-markdown')
export default function Layout({ children }) {
  const dispatch = useDispatch()
  const modalOpen = useSelector(state =>state.course.modal)
    const [isOpen, setOpen] = useState(true)
    const [msg, setMsg] = useState("")
    const [, setUpdate] = useState(1)
    const getAlert= async ()=>{
        await axiosInstance.get("/offers").then((data)=>{
            setMsg(data.data[0].offer)
            setOpen(true)
        }).catch((err)=>console.error(err))
    }
    useEffect(()=>{
        getAlert()
    },[])
    return (
        <>
            <Header />
            <BatchModal
                  isOpen={modalOpen}
                  onClose={() => dispatch(modal(false))}
                //   batches={batches}
                modalTitle="Lets Get Started!"
                  title="free-Demo"
                />
            {isOpen && msg && <Box width="100%"
                minHeight="40px"
                d="flex"
                p="0 15px"
                alignItems="center"
                bg="linear-gradient(126deg,#f5a623,#f76b1c)"
            >
                <Box
                flex="2"
                bg="transparent"
                color="#fff"
                w="100%"
                >
                    <ReactMarkdown plugins={[gfm]} children={msg}/>
                </Box>
                <GiCancel onClick={()=>setOpen(false)} color="#fff" size={20}/>
            </Box>}
            <div style={{ minHeight: "60vh" }}>

                {children}
            </div>
            <Footer />
        </>
    )
}
