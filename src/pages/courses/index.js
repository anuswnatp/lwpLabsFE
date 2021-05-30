import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import CourseCard from "../../components/courseCard";
import { Spinner } from "@chakra-ui/react";
import { setAllCourseData } from "../../../services/redux/actions/courses";
import { getAllCourses } from "../../../services/api/courses.api";
import { navigate } from "gatsby";
import { url } from "../../../services/api/api.url";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const _getAllCourses = async () => {
    setLoading(true);
    let res = await getAllCourses(false);
    dispatch(setAllCourseData(res.data));
    setCourses(res.data);
    setLoading(false);
  };

  useEffect(() => {
    _getAllCourses();
  }, []);

  const navigateToCourse = (id) => {
    navigate(`/course?courseId=${id}`)
  };

  return (
    <div style={{padding:'20px'}}>
      <Text
        mb="20px"
        textAlign="center"
        color="primary.100"
        fontWeight="700"
        fontSize="3xl"
      >
        All Courses
      </Text>
      <Box className={styles.cardContainer}>
        {loading ? (
          <Spinner color="#6118de" style={{ margin: "auto" }} />
        ) : courses && courses.length>0 ? (
          courses.map((item, key) => (
            <div
              className={styles.card}
              onClick={() => navigateToCourse(item._id)}
            >
              <CourseCard
                imageUrl={`${url}${item.img[0].url}`}
                imageAlt={item.title}
                title={item.title}
                rating={item.ratings}
                formattedPrice={item.price}
                instructor={`${item.teachers[0]?.firstName} ${item.teachers[0]?.lastName}`}
                latestBatch={item.batches ? item.batches[0] : null}
                key={key}
              />
            </div>
          ))
        ) : (
          <Text mb="20px" color="primary.100" fontWeight="400" fontSize="2xl">
            Sorry! There is no courses right now.
          </Text>
        )}
      </Box>
    </div>
  );
};

export default Courses;
