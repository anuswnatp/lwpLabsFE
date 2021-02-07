import React, { useState, useEffect } from "react";
import {
  AspectRatio,
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
  WrapItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import withLocation from "../../components/withLocation";
import BatchModal from "../../components/batchModal";
import axiosInstance from "../../../axiosConfig";
import cogoToast from "cogo-toast";
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFillExclamationOctagonFill,
  BsDot,
  BsPeopleFill,
} from "react-icons/bs";
// import {VscDebugBreakpointLog} from "react-icons/vsc"
import { BiCheck } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "./style.module.scss";
import { getDate } from "../../helperMethod";

const GetStar = ({ star }) => {
  const starCount = parseInt(star);
  console.log("strat--->", starCount, star);
  return (
    <>
      {starCount &&
        [...Array(starCount)].map((str) => (
          <BsStarFill
            color="gold"
            size="0.8em"
            style={{ display: "inline-block" }}
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

  const _getCourse = async () => {
    setLoading(true);
    try {
      let res = await axiosInstance.get(`/courses/${courseId}`);
      setCourse(res.data);
      setBatches(res.data.batches);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      cogoToast.error("Something went wrong!");
    }
  };
  useEffect(() => {
    _getCourse();
  }, []);

  const shortText = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    }
    return text;
  };
  return (
    <div>
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
            <div className={`${styles.banner} row mx-0`}>
              <div className={`${styles.bannerContainer} col-7`}>
                <h1>{course.title}</h1>
                <p>{shortText(course.description)}</p>
                {course.trending ? (
                  <Badge className={styles.badgeColor}>BestSeller</Badge>
                ) : null}
                <span
                  style={{
                    color: "gold",
                    marginLeft: "5px",
                    marginRight: "2px",
                  }}
                >
                  {course.ratings}
                </span>
                <GetStar star={course.ratings} />
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
              </div>
              <div className={"col"} style={{ paddingTop: "3%" }}>
                <AspectRatio maxW="300px" ratio={4 / 3}>
                  <Image
                    src={course.img}
                    alt="Course Image"
                    objectFit="cover"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className={`row mx-0`}>
              <div className={`col-8 mx-0`}>
                <div
                  className={styles.learnSection}
                  style={{ backgroundColor: "#FBFBF8", maxHeight: "500px" }}
                >
                  <h2 className={styles.learnSectionHeader}>
                    What you'll learn
                  </h2>
                  <Wrap>
                    {course.summary &&
                      course.summary.length > 0 &&
                      course.summary.map((item, key) => (
                        <WrapItem key={key}>
                          <Box
                            w="380px"
                            // h="100px"
                          >
                            <span className={styles.learnSectionSpan}>
                              <BiCheck className={styles.inlineBlock} />
                              {item}
                            </span>
                          </Box>
                        </WrapItem>
                      ))}
                  </Wrap>
                </div>
                <div className={styles.courseContentSection}>
                  <label className={styles.courseContentSectionLabel}>
                    Course content
                  </label>
                  <Accordion allowMultiple color="highlighter.100">
                    {course.TopicSchema && course.TopicSchema.length > 0
                      ? course.TopicSchema.map((lesson, key) => (
                          <AccordionItem key={key}>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  {lesson.Title}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            {lesson.Lessons && lesson.Lessons.length
                              ? lesson.Lessons.map((topic, id) => (
                                  <AccordionPanel pb={4} key={id}>
                                    {topic.title}
                                  </AccordionPanel>
                                ))
                              : null}
                          </AccordionItem>
                        ))
                      : null}
                  </Accordion>
                </div>
                <div className={styles.requirementSection}>
                  <Text className={styles.requirementSectionHeader}>
                    Requirements
                  </Text>
                  <div>
                    {course.prequisites && course.prequisites.length > 0 ? (
                      course.prequisites.map((item, key) => (
                        <Text key={key}>
                          <BsDot size="2em" className={styles.inlineBlock} />
                          {item.kind}
                        </Text>
                      ))
                    ) : (
                      <Text>There is no requirements.</Text>
                    )}
                  </div>
                </div>
                <div className={styles.featuredSection}>
                  <div className={styles.featuredSectionContainer}>
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        marginBottom: "10px",
                      }}
                    >
                      Featured review
                    </h2>
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
                        style={{ color: "#0f7c90" }}
                        variant="link"
                      >
                        Show more
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.teachersSection}>
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      marginBottom: "10px",
                    }}
                  >
                    Instructor
                  </h2>
                  <div>
                    <h3
                      style={{
                        color: "#0f7c90",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      Anirban Mandol
                    </h3>
                    <Text
                      style={{
                        color: "#73726c",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      Working at Cb for 1 year
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
                        src="https://bit.ly/sage-adebayo"
                        alt="Segun Adebayo"
                      />
                      <div>
                        <Text>
                          <BsStarFill
                            className={`mr-2 ${styles.inlineBlock}`}
                            color="gold"
                            size="0.8em"
                          />
                          4.6 instructor rating
                        </Text>
                        <Text>
                          <FaPen
                            className={`mr-2 ${styles.inlineBlock}`}
                            color="gold"
                            size="0.8em"
                          />
                          10866 Reviews
                        </Text>
                        <Text>
                          <BsPeopleFill
                            className={`mr-2 ${styles.inlineBlock}`}
                            color="gold"
                            size="0.8em"
                          />
                          11563 Students
                        </Text>
                        <Text>
                          <AiFillPlayCircle
                            className={`mr-2 ${styles.inlineBlock}`}
                            color="gold"
                            size="0.8em"
                          />
                          25 Courses
                        </Text>
                      </div>
                    </div>
                    <div>
                      <Text
                        style={{
                          height: showTeacher ? "auto" : "100px",
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
                        onClick={() => setShowTeacher(!showTeacher)}
                        colorScheme="teal"
                        style={{ color: "#0f7c90" }}
                        variant="link"
                      >
                        Show more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col mx-0`}>
                <Box
                  width={["100%", "100%", "48%", "48%"]}
                  alignSelf="flex-start"
                  mt={["0", "0", "30px", "100px"]}
                  className={styles.fixedBoxContainer}
                >
                  <Text
                    as="h2"
                    fontSize={["2em", "3em"]}
                    fontWeight={800}
                    color="primary.200"
                  >{`₹${course.price}`}</Text>
                  <Button
                    className={styles.btnDemo}
                    colorScheme="pink"
                    variant="solid"
                  >
                    Free Demo
                  </Button>

                  <Button
                    onClick={() => setModalOpen(true)}
                    className={styles.btnBuy}
                    colorScheme="pink"
                    variant="solid"
                  >
                    Buy Now
                  </Button>
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
