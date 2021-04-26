import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  // ModalFooter,
  ModalBody,
  ModalCloseButton,
  Wrap,
  WrapItem,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import { getDate } from "../../helperMethod";
import styles from "./styles.module.scss";
import { FormHolders } from "../form";
import Btn from "../btn";
import { getAllFreeDemo } from "../../../services/api/free-demo";
import Loader from "../loader";
import { Link } from "gatsby";
const BatchModal = ({ isOpen, onClose, batches,title }) => {
const [enroll,setEnroll]=React.useState(false);
const [demo,setDemo]=React.useState(false);
React.useEffect(()=>{
  setEnroll(false)
},[isOpen])
React.useEffect(()=>{
if(isOpen==='free-Demo'){
  setEnroll(true)
  setDemo(true)
}
},[isOpen])
  return (
    <Modal isOpen={isOpen} size="lg" onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
      <ModalHeader 
      borderRadius="5px 5px 0 0" 
      backgroundImage={"linear-gradient(95deg,#64afef,#248ae4 50%,#244ee4 100%)"} 
      color="#fff"
      d="flex"
      alignItems='center'
      >Available Batches
      <ModalCloseButton marginTop='5px' color="#fff" className="modalCross" />
      </ModalHeader>
        <ModalBody padding='20px'>
        {demo==='registered'?
        <Box>
          <DemoList title={title}/>
        </Box>
        :
        enroll?<FormHolders title={title} onClose={demo? ()=>setDemo('registered') : onClose}/>
        :
        <>
        <Wrap spacing='20px'>
            {
              batches?.length > 0 ? (
              batches.map((batch, key) => (
                <WrapItem
                onClick={()=>{setEnroll(true);console.log('hello');}}
                key={key}>
                  <Center
                    className={styles.modalBox}
                  >
                    <Text>
                      <Text fontWeight='600' >Start Date:</Text> {`${getDate(batch.startDate, true)}`}
                    </Text>
                    <Text><Text fontWeight='600' color='tomato' >End Date:</Text> {`${getDate(batch.endDate, true)}`}</Text>
                    <Box
                    bg="linear-gradient(126deg,#f5a623,#f76b1c)"
                    borderRadius='30px'
                    mt='5px'
                    padding='5px 15px'
                    color='#fff'
                    >Enroll Now</Box>
                  </Center>
                </WrapItem>
              ))
            ) : (
              <p>No batches available right now.</p>
            )}
          </Wrap>
          </>
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BatchModal;

const DemoList=({title})=>{
  const[loading,setLoading]= React.useState(true)
  const[list,setList]= React.useState({})
  React.useEffect(()=>{
    setLoading(true)
    getAllFreeDemo().then(data=>{
      setLoading(false)
      const d=JSON.parse(JSON.stringify(data.data))
      let obj={}
      if (! data.err){
        const CourseNames=d.map((i)=>i.course?.title)
        CourseNames.forEach((i)=>{
        obj[i]=d.filter((j)=>j.course?.title===i)
      })
      }
      setList(obj)
    })
  },[])
  if(!loading){
    setTimeout(()=>{
      let d=document.getElementById(title).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    },0)
    if (list && Object.keys(list).length > 0 ){
      return <Box className={styles.listContainer}>
      {Object.keys(list).map((i,k)=>{
        return <ul
        id={title.includes(i)?title:`${k}_course`}
        style={{border:title.includes(i)?'2px solid #f47523':'none'}} 
        className={styles.list} 
        key={k}>
          <Text color={title.includes(i)?'#f47523':''} fontWeight={700}>
            {i}
          </Text>
          {list[i].map((j,k)=>(
            <li className={styles.links}>
              <a key={k} href={j.demoLink}>
              {j.demoLink}
            </a>
            <Text>{`Start Date: ${getDate(j.startDate,true)}`}</Text>
            <Text>{`End Date: ${getDate(j.expiryDate,true)}`}</Text>
          </li>
          ))}
        </ul>
      }
      )}
      </Box>
    }else
    return <Text>Aww! Snap.</Text>
  }else
  return <Loader/>
}