import React, { useState, useEffect } from "react";
import {
  Flex,
  Badge,
  Spinner,
  Image,
  Button,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import gfm from 'remark-gfm'
import withLocation from "../../components/withLocation";
import BatchModal from "../../components/batchModal";
import axiosInstance from "../../../axiosConfig";
import { getAllCourses } from "../../../services/api/courses.api";
import cogoToast from "cogo-toast";
import {
  BsStarFill,
  BsFillExclamationOctagonFill,
  BsDot,
  BsPeopleFill,
} from "react-icons/bs";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import {
  FaPen,
  FaMobileAlt,
  FaCertificate,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiLiveFill, RiArticleLine } from "react-icons/ri";
import styles from "./style.module.scss";
import { getDate } from "../../helperMethod";
import Btn from "../../components/btn";
const ReactMarkdown = require('react-markdown')
const GetStar = ({ star }) => {
  const starCount = parseInt(star);
  return (
    <>
      {starCount &&
        [...Array(starCount)].map((str) => (
          <BsStarFill
            color="gold"
            size="0.8em"
            style={{ margin: "0 5px" }}
          />
        ))}
    </>
  );
};

const Course = ({ search }) => {
  const { courseId } = search;
  const [course, setCourse] = useState();
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [batches, setBatches] = useState([]);
  const [showFeature, setShowFeature] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showLessonDescription, setShowLessonDescription] = useState("");
  const [windowHeight, setWindowHeight] = useState();
  const [trendingCourse, setTrendingCourse] = useState([]);

  const _getCourse = async () => {
    setLoading(true);
    try {
      let res = await axiosInstance.get(`/courses/${courseId}`);
      setCourse(res.data);
      console.log(res.data);
      setBatches(res.data.batches);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      cogoToast.error("Something went wrong!");
    }
  };
  const getWindowHeight = () => {
    setWindowHeight(window.scrollY);
  };

  const _getTrendingCourses = async () => {
    let res = await getAllCourses(true);
    setTrendingCourse(res.data);
  };
  useEffect(() => {
    _getCourse();
    _getTrendingCourses();
    window.addEventListener("scroll", getWindowHeight);
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const handleShowLessonDescription = (id) => {
    if (showLessonDescription === id) {
      setShowLessonDescription("");
    } else {
      setShowLessonDescription(id);
    }
  };

  const shortText = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
    return text;
  };

  return (
    <div className={styles.courseContainer}>
      {loading ? (
        <Spinner
          color="#6118de"
          style={{ marginLeft: "50%", marginTop: "50px" }}
        />
      ) : (
          course && (
            <>
              <BatchModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                batches={batches}
              />
              <Flex
                maxH={["55vh", "55vh", "45vh", "40vh"]}
                alignItems="center"
                className={`${styles.banner}`}>
                <Flex
                  flex={["1", "3"]}
                  justifyContent="center"
                  direction={["column"]}
                  className={`${styles.bannerContainer} col-md-7 col-sm-12`}>
                  <h1>{course.title}</h1>
                  <p>{shortText(course.description)}</p>
                  {course.trending ? (
                    <Badge
                      width="max-content"
                      className={styles.badgeColor}>BestSeller</Badge>
                  ) : null}
                  <Flex
                    alignItems="center"
                  ><GetStar star={course.rating} />
                    <span
                      style={{
                        color: "gold",
                        marginLeft: "5px",
                        marginRight: "2px",
                      }}
                    >
                      {course.rating}
                    </span></Flex>
                  <p>Created by {course.teachers[0].displayName}</p>
                  <span className={styles.bannerSpan}>
                    <BsFillExclamationOctagonFill
                      className={`mr-1 ${styles.inlineBlock}`}
                    />
                    {`Last Updated ${getDate(course.updatedAt)}`}
                  </span>
                  <span className={styles.bannerSpan}>
                    <MdLanguage className={`mr-1 ${styles.inlineBlock}`} />
                    {course.language || "English"}
                  </span>
                </Flex>
                <Box
                  flex="1"
                  display={["none", "flex", "flex", "flex"]}
                  alignItems="center"
                  justifyContent="center"
                  pt="25px"
                >
                  <Image
                    maxH={["250px", "250px", "250px", "350px"]}
                    maxW={["250px", "250px", "250px", "350px"]}
                    borderRadius="12px"
                    src={course.img}
                    alt="Course Image"
                    objectFit="cover"
                  />
                </Box>
              </Flex>
              <div className={`row mx-0`}>
                <Box
                  margin={["20px 0px", "30px"]}
                  className={`col-md-8 col-sm-12 mx-0 p-10`}>
                  <Box
                    className={`${styles.learnSection} p-10`}
                    style={{ backgroundColor: "#FBFBF8", height: "auto" }}
                  >
                    <Text as="label" className={styles.learnSectionHeader}>
                      What you'll Learn
                    </Text>
                    <Wrap p="0 10px" spacing="20px">
                      {course.summary &&
                        course.summary.length > 0 &&
                        course.summary.map((item, key) => {
                          return showSummary ? (
                            <WrapItem key={key}
                              color="highlighter.100">
                              <Box
                                w={["100%","300px","300px",'380px']}
                                p="5px"
                                display="flex"
                                whiteSpace="normal"
                                wordBreak="break-word" >
                                <IoCheckmarkDoneCircle size="30px" />
                                <Text
                                  fontSize={["15px", "17px"]}
                                  ml="5px" textAlign="justify">{item}</Text>
                              </Box>
                            </WrapItem>
                          ) : key <= 5 ? (
                            <WrapItem key={key}
                              color="highlighter.100">
                              <Box
                                p="5px"
                                display="flex"
                                w={["100%","300px","300px",'380px']}
                                whiteSpace="normal"
                                wordBreak="break-word" >
                                <IoCheckmarkDoneCircle size="30px" />
                                <Text
                                  fontSize={["15px", "17px"]}
                                  ml="5px" textAlign="justify">{item}</Text>
                              </Box>
                            </WrapItem>
                          ) : null;
                        })}
                    </Wrap>
                    {course.summary && course.summary.length > 6 ? (
                      <Box
                        className={styles.showMore}
                      >
                        <Button
                          onClick={() => setShowSummary(!showSummary)}
                          colorScheme="teal"
                          className={styles.showMoreBtn}
                          variant="link"
                        >
                          {showSummary ? "Show less" : "Show more"}
                        </Button>
                      </Box>
                    ) : null}
                  </Box>
                  <Box
                    m={["20px 0", "30px"]}>
                    <Text as="label">
                      Course content
                    </Text>
                    <Accordion allowMultiple>
                      {course.TopicSchema && course.TopicSchema.length > 0
                        ? course.TopicSchema.map((lesson, key) => (
                          <AccordionItem className={styles.accordion} key={key}>
                            <AccordionButton>
                              <Text fontWeight="700" flex="1" textAlign="left">
                                {lesson.Title}
                              </Text>
                              <AccordionIcon />
                            </AccordionButton>
                            {lesson.Lessons && lesson.Lessons.length
                              ? lesson.Lessons.map((topic, id) => (
                                <AccordionPanel
                                  ml="10px"
                                  pb={4}
                                  key={id}
                                  onClick={() =>
                                    handleShowLessonDescription(topic._id)
                                  }
                                >
                                  {lesson.descriptions&&<Text
                                  color="#545454 !important"
                                  mb="10px"
                                  >{lesson.descriptions}</Text>}
                                  <Flex alignItems="center">
                                    <Text fontWeight="500" cursor="pointer" mr="10px">{topic.title}</Text>
                                    <Box>
                                      {topic.descriptions &&
                                        (showLessonDescription === topic._id ? (
                                          <FaCaretUp
                                            className={`ml-1`}
                                          />
                                        ) : (
                                            <FaCaretDown
                                              className={`${styles.inlineBlock} ml-1`}
                                            />
                                          ))}
                                    </Box>
                                  </Flex>
                                  {topic.descriptions &&
                                    <Text
                                      ml="10px"
                                      mt="10px"
                                      color="#545454 !important"
                                      style={{
                                        display:
                                          showLessonDescription === topic._id
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      {topic.descriptions}
                                    </Text>}
                                </AccordionPanel>
                              ))
                              : null}
                          </AccordionItem>
                        ))
                        : null}
                    </Accordion>
                  </Box>
                  <Box m={["20px 0","40px"]} >
                    <Text as="label" className={styles.requirementSectionHeader}>
                      Requirements
                  </Text>
                    <div>
                      {course.prequisites && course.prequisites.length > 0 ? (
                        course.prequisites.map((item, key) => (
                          <Text as="span" d="flex" alignItems="center" color="highlighter.100" key={key}>
                            <BsDot size="2em" className={styles.inlineBlock} />
                            {item.points}
                          </Text>
                        ))
                      ) : (
                          <Text>There is no requirements.</Text>
                        )}
                    </div>
                  </Box>
                  <Box m={["20px 0","40px"]} >
                    <Text as="label" className={styles.descriptionSectionHedaer}>
                      Description
                  </Text>
                    <div>
                      <Text
                        style={{
                          height: showDescription ? "auto" : "200px",
                          overflow: "hidden",
                        }}
                      >
                        <ReactMarkdown plugins={[gfm]} children={course.description}/>
                      </Text>
                      <Box
                        className={styles.showMore}
                      >
                        <Button
                          onClick={() => setShowDescription(!showDescription)}
                          className={styles.showMoreBtn}
                          colorScheme="teal"
                          variant="link"
                        >
                          {showDescription ? "Show less" : "Show more"}
                        </Button>
                      </Box>
                    </div>
                  </Box>
                  <Box m={["20px 0","40px"]}>
                    <div className={styles.featuredSectionContainer}>
                      <Text
                        as="label"
                        style={{
                          fontSize: "24px",
                          fontWeight: 800,
                          marginBottom: "10px",
                        }}
                      >
                        Featured review
                    </Text>
                      <div style={{ display: "flex" }}>
                        <Image
                          style={{ marginRight: "10px" }}
                          borderRadius="full"
                          boxSize="70px"
                          src="https://bit.ly/sage-adebayo"
                          alt="Segun Adebayo"
                        />
                        <div>
                          <Text style={{ fontWeight: "bold" }}>
                            Anirban Mandol
                        </Text>
                          <Text>10 courses</Text>
                          <Text>8 reviews</Text>
                        </div>
                      </div>
                      <div className={styles.featureStarContainer}>
                        <GetStar star={5} />
                        <span className={styles.featuredSectionSpan}>
                          a year ago
                      </span>
                      </div>
                      <div>
                        <Text
                          style={{
                            height: showFeature ? "auto" : "100px",
                            overflow: "hidden",
                          }}
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                      </Text>
                        <Button
                          onClick={() => setShowFeature(!showFeature)}
                          colorScheme="teal"
                          className={styles.showMoreBtn}
                          variant="link"
                        >
                          {showFeature ? "Show less" : "Show more"}
                        </Button>
                      </div>
                    </div>
                  </Box>
                  <Box m={["20px 0","40px"]}>
                    <Text
                      as="label"
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        marginBottom: "10px",
                      }}
                    >
                      Students also bought
                  </Text>
                    <div className={styles.trendingCourseContainer}>
                      {trendingCourse && trendingCourse.length > 0 ?
                        trendingCourse.map((item, key) => (
                          <div key={key} style={{
                            display: "flex",
                            marginTop: "15px",
                            marginBottom: "15px",
                          }}>
                            <Image
                              style={{ marginRight: "10px" }}
                              boxSize="80px"
                              src={item.img}
                              alt="Course_Image"
                            />
                            <div>
                              <Text style={{ fontSize: "18px", fontWeight: 700 }}>{item.title}</Text>
                              <Text style={{ fontWeight: 500 }}>Updated on {getDate(course.updatedAt)}</Text>
                            </div>
                            <div style={{ margin: "0 auto" }}><Text style={{ color: "gold", fontWeight: 600 }}><BsStarFill className={styles.inlineBlock} />{item.ratings || '4.5'}</Text></div>
                            <div><Text style={{ fontWeight: 800 }}>₹{item.price}</Text></div>
                          </div>
                        )) : null}


                    </div>
                  </Box>
                  <Box  m={["20px 0","40px"]}>
                    <Text
                      as="label"
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        marginBottom: "10px",
                      }}
                    >
                      Instructor
                  </Text>
                    <div>
                      <h3
                        style={{
                          color: "#0f7c90",
                          fontSize: "20px",
                          fontWeight: 700,
                        }}
                      >
                        {`${course.teachers[0].firstName} ${course.teachers[0].firstName}`}
                    </h3>
                      <Text
                        style={{
                          color: "#73726c",
                          fontWeight: 400,
                          fontSize: "18px",
                        }}
                      >
                        {course.teachers[0].designation}
                    </Text>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "15px",
                          marginBottom: "15px",
                        }}
                      >
                        <Image
                          style={{ marginRight: "10px" }}
                          borderRadius="full"
                          boxSize="90px"
                          src= {course.teachers[0].profile_pic ||"https://i.pinimg.com/originals/cc/e1/db/cce1db594930d2217fc4f484434742d9.jpg"}
                          alt="Segun Adebayo"
                        />
                        <div>
                          <Text d="flex" alignItems="center">
                            <BsStarFill
                              className={`mr-2 ${styles.inlineBlock}`}
                              color="gold"
                              size="0.8em"
                            />
                          4.6 instructor rating
                        </Text>
                          {/* <Text>
                            <FaPen
                              className={`mr-2 ${styles.inlineBlock}`}
                              color="gold"
                              size="0.8em"
                            />
                          10866 Reviews
                        </Text> */}
                          <Text d="flex" alignItems="center">
                            <BsPeopleFill
                              className={`mr-2 ${styles.inlineBlock}`}
                              color="gold"
                              size="0.8em"
                            />
                          {course.teachers[0].students.length && `${course.teachers[0].students.length} Students` || "500 Students"}
                        </Text>
                          {/* <Text>
                            <AiFillPlayCircle
                              className={`mr-2 ${styles.inlineBlock}`}
                              color="gold"
                              size="0.8em"
                            />
                          25 Courses
                        </Text> */}
                        </div>
                      </div>
                      <div>
                        <Text
                          style={{
                            height: showTeacher ? "auto" : "100px",
                            overflow: "hidden",
                          }}
                        >
                          {course.teachers[0].bio || `Experienced in the Professional Skills you opt for.`}
                      </Text>
                        {course.teachers[0].bio && course.teachers[0].bio.length > 150 && <Button
                          onClick={() => setShowTeacher(!showTeacher)}
                          colorScheme="teal"
                          className={styles.showMoreBtn}
                          variant="link"
                        >
                          {showTeacher ? "Show less" : "Show more"}
                        </Button>}
                      </div>
                    </div>
                  </Box>
                </Box>
                <div className={`col-4 mx-0 pb-20`}>
                  <Box
                  mb="20px"
                    width="100% !important"
                    alignSelf="flex-start"
                    display={["none", "flex", "flex"]}
                    // mt={["0", "0", "30px", "100px"]}
                    className={
                      windowHeight > 350
                        ? `${styles.fixedBoxContainer} ${styles.stickyBox}`
                        : `${styles.fixedBoxContainer} ${styles.absoluteBox}`
                    }
                  >
                    <Text
                      as="h3"
                      fontSize={["2em", "3em"]}
                      fontWeight={800}
                      color="primary.200"
                    >{`₹${course.price}`}</Text>
                    <Btn size="lg"
                      primary={true}
                      style={{ margin: "8px 0", width: "75%" }}
                    >Free Demo</Btn>

                    <Btn size="lg"
                      style={{ width: "75%" }}
                      onClick={() => setModalOpen(true)}
                    >Buy Now</Btn>

                    <div className={styles.boxIncludes}>
                      <Text as="h6">This course includes:</Text>
                      <Text className={`${styles.boxText}`}>
                        <RiLiveFill className={`${styles.inlineBlock} mr-2`} />
                      On demand live classes
                    </Text>
                      <Text className={`${styles.boxText}`}>
                        <RiArticleLine className={`${styles.inlineBlock} mr-2`} />
                      22 lectures
                    </Text>
                      <Text className={`${styles.boxText}`}>
                        <FaMobileAlt className={`${styles.inlineBlock} mr-2`} />
                      Access on Mobile and TV
                    </Text>
                      <Text className={`${styles.boxText}`}>
                        <FaCertificate className={`${styles.inlineBlock} mr-2`} />
                      Certificate on completion
                    </Text>
                    </div>
                  </Box>
                </div>
              </div>
            </>
          )
        )}
    </div>
  );
};

Course.propTypes = {
  search: PropTypes.object,
};

export default withLocation(Course);
