import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, Button, TabPanel,
     TabPanels,useDisclosure, Center, Skeleton, Stack } from '@chakra-ui/react'
import BannerCarousel from '../../components/carousel'
import CourseCard from '../../components/courseCard'
import { setAllTrendingCourseData, setAllTrendingBatchData, modal } from "../../../services/redux/actions/courses"
import styles from "./styles.module.scss"
import Btn from '../../components/btn'
import ListCarousel from '../../components/listCarousel'
// import Tab from '../../components/tab'
import { getAllCourses } from "../../../services/api/courses.api"
import { getAllBatches } from '../../../services/api/batches.api'
import BatchCard from '../../components/batchCard'
import AvatarGenerator from 'react-avatar-generator';
import { AiFillLinkedin } from "react-icons/ai"
import Form from "../../components/form"
import SectionDivider from '../../components/sectionDivider'
import { getBanners } from '../../../services/api/banners.api'
import { graphql, StaticQuery,useStaticQuery } from "gatsby";
import tcs from "../../images/company/tcs.png"
import genpact from "../../images/company/genpact.png"
import wipro from "../../images/company/wipro.png"
import mindtree from "../../images/company/mindtree.png"
import visa from "../../images/company/visa.png"
import oracle from "../../images/company/oracle.png"
import eduramp from "../../images/company/eduramp.jpeg"
import edureka from "../../images/company/edureka.png"
import simplilearn from "../../images/company/simplilearn.png"
import VideoPlayer from "../../components/videoPlayer"
import { navigate } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
import { getTestimonials } from '../../../services/api/testimonials.api';
import GatsbyImage from 'gatsby-image';
function Home(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const getAllTrendingCourse = async () => {
        let data = await getAllCourses(true)
        try{
        dispatch(setAllTrendingCourseData(data))
        }catch{
            console.error("Internal Server Error");
        }
        // let banners= await getBanners()
    }
    // const getAllTrendingBatches = async () => {
    //     let data = await getAllBatches(true)
    //     dispatch(setAllTrendingBatchData(data))
    // }
    const imageData = useStaticQuery(graphql`
    query MyQuery {
        live: file(relativePath: { eq: "liveClasses.jpg" }) {
          childImageSharp {
            fluid(maxWidth:750
                quality:10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        project: file(relativePath: { eq: "project.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 750 quality:10) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          job: file(relativePath: { eq: "jobSupport.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750 quality:10) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
          consult: file(relativePath: { eq: "consult.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
      }
    `)
    const [reviews,setReviews]=useState([])
    useEffect(() => {
        getAllTrendingCourse()
        getBanners()
        getTestimonials(true).then(data=>{
            setReviews(data.data)
        }).catch(err=>{
            setReviews([])
        })
        // getAllTrendingBatches()
    }, [])
    return (
                <div>
                <Form isOpen={isOpen} onClose={onClose}/>
                <BannerCarousel />
                <Box>
                    <AboutSection imageData={imageData}  />
                    <VideoPlayer/>
                    <Box background="#c0c0c01a">
                        <CourseSection/>
                    </Box>
                    <Counselling imageData={imageData} onOpen={onOpen} />
                    <SectionDivider>
                        <Center h="100%" flexWrap="wrap" justifyContent={["center","space-around"]} textAlign="center" color="#fff" display="flex" alignItems="center">
                        <a href="https://wa.me/+918688653287" target="_blank"  style={{fontWeight:"800", color:"#fff", fontSize:'1.5em'}}>
                                Click to call us for free Workshop or Enquiry:
                            </a>
                            <a href="https://wa.me/+918688653287" target="_blank"  style={{fontWeight:"800", color:"#fff", fontSize:'1.5em'}}>
                                {`(+91)8688653287`}
                            </a>
                        </Center>
                    </SectionDivider>
                    <Testimonials data={reviews} trending={true}/>
                    <Clients/>
                </Box>
            </div>
    )
}

export default Home

const Counselling = ({onOpen,imageData}) => {
    return <Box>
        <Flex
            alignItems="center"
            direction={['column', "column", "row", "row"]}
            mb={[20, 20, 0, 0]}
        >
            <GatsbyImage
                fluid={imageData.consult.childImageSharp.fluid}
                alt="Consult"
                className={styles.consultImage}
            />
            <Box
                width={["100%", "100%", "48%", "48%"]}
                alignSelf="flex-start"
                mt={["0", "0", "30px", "100px"]}
                className={styles.consultContainer}>
                <Text as="h2"
                    fontSize={["2em", "3em"]}
                    fontWeight={800}
                    color="primary.200"
                >Not Sure about where to start?</Text>
                <Text as="p"
                    fontSize={"1.1em"}
                    color="highlighter.100"
                    marginTop="10px"
                >Talk to an Expert to get a clear idea about your goal.
                    We know it is hard to understand, what sort of technology can boost your career,
                    May be year gaps are stopping you from learning again.
                    No prior knowledge is required to get a Job trust us and give us a Call.
                </Text>
                <Btn colorScheme="blue" size="lg" onClick={onOpen} bgColor="primary.100">Consult Now</Btn>
            </Box>
        </Flex>
    </Box>
}

const CourseSection = () => {
    const courseState = useSelector(state => state.course.trendingCourses)
    return <Box as="div">
        <Text mb="20px" textAlign="center" color="primary.100" fontWeight="500" fontSize="3xl">Trending Courses</Text>
        {courseState?.data && <ListCarousel>
            {courseState?.data?.map((item, key) => <Box key={key} onClick={()=>navigate(`/course?courseId=${item._id}`)}>
            <CourseCard
                imageUrl={item.img}
                imageAlt={item.title}
                title={item.title}
                rating={item.ratings}
                formattedPrice={item.price}
                instructor={`${item.teachers[0]?.firstName} ${item.teachers[0]?.lastName}`}
                latestBatch={item.batches?item.batches[0]:null}
                key={key} /></Box>)}
        </ListCarousel>}
    </Box>
}

const BatchSection = () => {
    const batchState = useSelector(state => state.course.trendingBatches)
    return <Box as="div">
        {batchState && <ListCarousel>
            {batchState.map((item, key) => <BatchCard
                course={item.course}
                startDate={item.startdate}
                endDate={item.endDate}
                strength={item.strength}
                instructor={item.instructor}
                id={item._id}
                key={key} />)}
        </ListCarousel>}
    </Box>
}

const AboutSection = ({imageData}) => {
    const flow = [
        {
            img: imageData.live.childImageSharp.fluid,
            alt: "live classes",
            title: "Live Clases"
        },
        {
            img: imageData.project.childImageSharp.fluid,
            alt: "Project",
            title: "Project Based Learning"
        },
        {
            img: imageData.job.childImageSharp.fluid,
            alt: "Job",
            title: "Job Support"
        }
    ]
    return <Flex
        p={["30px 30px", "40px 30px", "50px 30px", "60px 30px"]}
        direction={["column", "row", "row", "row"]}
        justifyContent="space-between">
        {flow.map((item, key) => <Box key={key}>
            <Box
                width={["100%", "14rem", "25em"]}
                textAlign="center"
                borderRadius="20px"
                borderWidth="2px"
                borderColor="#8bbdd86b"
                boxShadow="0px 8px 12px 0px #e6e6e6"
                bg="#fafafa"
            >
                <GatsbyImage
                fluid={item.img}
                alt={item.alt}
                style={{height:'19rem',borderRadius:20}}
                />
            </Box>
            <Text mt="20px" mb="10px" as="h3" textAlign="center" fontWeight="600" color="highlighter.100">{item.title}</Text>
        </Box>)}
    </Flex>
}
const Clients= ()=>{
    const ar=[{src:tcs,link:"https://www.tcs.com/"},
    {src:genpact,link:"https://www.genpact.com/"},
    {src:wipro,link:"https://www.genpact.com/"},
    {src:eduramp,link:"https://www.eduramp.in/"},
    {src:edureka,link:"https://www.edureka.co/"},
    {src:simplilearn,link:"https://www.simplilearn.com/"},
    {src:mindtree,link:"https://www.mindtree.com/"},
    {src:visa,link:"https://www.visa.co.in/"},
    {src:oracle,link:"https://www.oracle.com/index.html"},
]
    return (
        <Box d="flex" minH="120px" alignItems="center" p="0 40px">
            <Text color="text.100" fontWeight="800" mr="30px">
                Our Clients
            </Text>
            <Box className={styles.company} d="flex" overflow="hidden" alignItems='center' overflowX="scroll">
                {
                    ar.map((i,key)=><Box
                    key={key}
                    h={['80px']}
                    w={['80px']}
                    m={'0 20px'}
                    d='flex'
                    justifyContent="center"
                    alignItems="center"
                    >
                    <a key={key} className={styles.clientLinks} href={i.link} target="_blank">
                        <Image m="0 20px" objectFit="contain" h="50px" w="120px" src={i.src}/>
                    </a></Box>)
                }
            </Box>
        </Box>
    )
}
export const Testimonials = ({data=[],trending=false}) => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        setReviews(data)
    },[data])
    const [avatarGenerator, setavatarGenerator] = useState(null);
    // let reviews = data.data
    const randomize = () => {
        setavatarGenerator(avatarGenerator.randomize());
    }
    let randomAr = [1, 2, 5, 6, 8, 9]
    if(reviews.length){
        return <Box p={5}>
        {trending && <Text mb="20px" textAlign="center" color="primary.100" fontWeight="500" fontSize="3xl">Empowering Students Around the World</Text>}
        <Flex flexWrap="wrap" justifyContent="space-around">
            {
                reviews.map((data, key) => <Flex
                    justifyContent="space-evenly"
                    minW={["100%", "100%", randomAr.includes(key) ? "58%" : "40%"]}
                    m="10px 0"
                    key={key} className={styles.commentsCard}>
                    <Box alignItems="center" d="flex" flexDirection="column">
                        <AvatarGenerator
                            borderRadius={"50%"}
                            width={100} height={100} sizing={2}
                            ref={(el) => {
                                setavatarGenerator(el);
                            }}
                            colors={['#023047', '#ffb703', '#06d6a0', "#fb8500", "#ebebeb"]}
                            backgroundColor="#ffad69"
                        />
                        {data.linkedIn && <AiFillLinkedin color="#0077b6" size="20px" />}
                    </Box>
                    <Box maxW={randomAr.includes(key) ? "28rem" : "19rem"} minW={['11em',"18rem", randomAr.includes(key) ? "28rem" : ""]} whiteSpace="break-spaces">
                        <Text>{data.review}</Text>
                        <Box d="flex" alignItems="center" justifyContent="flex-end" width="100%">
                            <Box bg="primary.200"
                                mr="5px"
                                width="71px"
                                height="1px"
                            ></Box>
                            <Text color="primary.200">{data.name}</Text>
                        </Box>
                        {data.designation && <Text textAlign="end" color="primary.200">{data.designation}</Text>}
                    </Box>
                </Flex>)
            }
        </Flex>
    </Box>
    }else{
        return <div/>
    }
}

