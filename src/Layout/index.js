import React, { useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Box} from "@chakra-ui/react"
import axiosInstance from "../../axiosConfig"
import { useDispatch, useSelector } from "react-redux"
import BatchModal from "../components/batchModal"
import { modal } from "../../services/redux/actions/courses"
import { RiWhatsappFill } from "react-icons/ri"
import styles from "./styles.module.scss"
export default function Layout({ children }) {
  const dispatch = useDispatch()
  const modalOpen = useSelector(state =>state.course.modal)
    const [isOpen, setOpen] = useState(true)
    const [msg, setMsg] = useState("")
    const [, setUpdate] = useState(1)
    const getAlert= async ()=>{
        await axiosInstance.get("/offers").then((data)=>{
            setMsg(data.data[0].offers)
            setOpen(true)
        }).catch((err)=>console.error(err))
    }
    useEffect(()=>{
        getAlert()
    },[])
    return (
        <>
            <Header isOpen={isOpen} msg={msg} setOpen={(e)=>setOpen(e)} />
            <BatchModal
                  isOpen={modalOpen}
                  onClose={() => dispatch(modal(false))}
                //   batches={batches}
                modalTitle="Lets Get Started!"
                  title="free-Demo"
                />
            <div style={{ minHeight: "75vh"}}>
                {children}
            </div>
            <a
        href="https://wa.me/+918688653287"
        className={styles.whatsapp_float}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappFill size="2em"/>
      </a>
            <Footer />
        </>
    )
}
