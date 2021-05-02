import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Image, Button, TabPanel,
     TabPanels,useDisclosure } from '@chakra-ui/react'
import BannerCarousel from '../../components/carousel'
import CourseCard from '../../components/courseCard'
import { setAllTrendingCourseData, setAllTrendingBatchData } from "../../../services/redux/actions/courses"
import styles from "./styles.module.scss"
import Consult from "../../images/consult.jpg"
import Btn from '../../components/btn'
import ListCarousel from '../../components/listCarousel'
import live from "../../images/liveClasses.jpg"
import project from "../../images/project.jpg"
import job from "../../images/jobSupport.jpg"
// import Tab from '../../components/tab'
import { getAllCourses } from "../../../services/api/courses.api"
import { getAllBatches } from '../../../services/api/batches.api'
import BatchCard from '../../components/batchCard'
import AvatarGenerator from 'react-avatar-generator';
import { AiFillLinkedin } from "react-icons/ai"
import Form from "../../components/form"
import SectionDivider from '../../components/sectionDivider'
import { getBanners } from '../../../services/api/banners.api'
import tcs from "../../images/company/tcs.png"
import genpact from "../../images/company/Genpact_horizontal_color_rgb.svg"
import wipro from "../../images/company/wipro.png"
import mindtree from "../../images/company/mindtree.png"
import visa from "../../images/company/visa.png"
import oracle from "../../images/company/oracle.png"
import amazon from "../../images/company/amazon.png"
import VideoPlayer from "../../components/videoPlayer"
import { navigate } from 'gatsby'
import { useDispatch, useSelector } from 'react-redux'
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
    useEffect(() => {
        getAllTrendingCourse()
        getBanners()
        // getAllTrendingBatches()
    }, [])
    return (
                <div>
                <Form isOpen={isOpen} onClose={onClose}/>
                <BannerCarousel />
                <Box>
                    <AboutSection />
                    <VideoPlayer/>
                    <Box background="#c0c0c01a">
                        <CourseSection/>
                    </Box>
                    <Counselling onOpen={onOpen} />
                    <SectionDivider>
                        <Box>
                            <Text color="#fff">
                                Call us for free Workshop:
                            </Text>
                            <Text>

                            </Text>
                        </Box>
                    </SectionDivider>
                    <Testimonials />
                    <Clients/>
                </Box>
            </div>
    )
}

export default Home

const Counselling = ({onOpen}) => {
    return <Box>
        <Flex
            alignItems="center"
            direction={['column', "column", "row", "row"]}
            mb={[20, 20, 0, 0]}
        >
            <Image
                src={Consult}
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
                    is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took
                    a galley of type and scrambled it to make a type specimen book.
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
            {courseState?.data?.map((item, key) => <Box onClick={()=>navigate(`/course?courseId=${item._id}`)}>
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
                startDate={item.startDate}
                endDate={item.endDate}
                strength={item.strength}
                instructor={item.instructor}
                id={item._id}
                key={key} />)}
        </ListCarousel>}
    </Box>
}

const AboutSection = () => {
    const flow = [
        {
            img: live,
            alt: "live classes",
            title: "Live Clases"
        },
        {
            img: project,
            alt: "Project",
            title: "Project Based Learning"
        },
        {
            img: job,
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
                <Image borderRadius="20px" height={["19rem"]} width="100%"
                    objectFit={["contain", "contain", "cover", "contain"]} src={item.img} alt={item.alt} />
            </Box>
            <Text mt="20px" mb="10px" as="h3" textAlign="center" fontWeight="600" color="highlighter.100">{item.title}</Text>
        </Box>)}
    </Flex>
}
const Clients= ()=>{
    const ar=[{src:tcs,link:"https://www.tcs.com/"},
    {src:genpact,link:"https://www.genpact.com/"},
    {src:wipro,link:"https://www.genpact.com/"},
    {src:amazon,link:"https://www.genpact.com/"},
    {src:mindtree,link:"https://www.genpact.com/"},
    {src:visa,link:"https://www.genpact.com/"},
    {src:oracle,link:"https://www.genpact.com/"},
]
    return (
        <Box d="flex" minH="120px" alignItems="center" p="0 40px">
            <Text color="text.100" fontWeight="800" mr="30px">
                Our Clients
            </Text>
            <Box className={styles.company} d="flex" overflow="hidden" alignItems='center' overflowX="scroll">
                {
                    ar.map((i,key)=><Box
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
const Testimonials = () => {
    let data = {
        name: "Mohammad Ali",
        linkedIn: "www.linkedin.com",
        review: "Rahul has been amazing through out the course. You will feel the passion he has towards teaching. Goes above and beyond to make sure we understand the concept well. Good motivator as well. I will definitely recommend taking training from him.",
        course: {
            title: "DevOps by Rahul Chaudhury",
            id: "600ac8a4b24fd92eebd9bd82"
        },
        designation: "Devops Engineer"
    }
    const [avatarGenerator, setavatarGenerator] = useState(null);
    let reviews = Array(6).fill(data)
    const randomize = () => {
        setavatarGenerator(avatarGenerator.randomize());
    }
    let randomAr = [1, 2, 5, 6, 8, 9]
    // randomize()
    // useEffect(()=>randomize(),[])
    return <Box p={5}>
        <Text mb="20px" textAlign="center" color="primary.100" fontWeight="500" fontSize="3xl">Empowering Students Around the World</Text>
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
}

