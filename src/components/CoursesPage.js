import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses)); //Get courses from the API. When call completes, store the array of courses in state.
  }, []); //dependency array - stop useEffect infinite loop, empty array tell react only run once

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
