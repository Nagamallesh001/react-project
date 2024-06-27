
import React from 'react'
import Back from '../back/Back';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';
import Footer1 from './footer';

const CoursesHome=()=> {
  return (
    <>
    <Back title="Explore Courses"/>
    <CoursesCard />
    <OnlineCourses/>
    <Footer1/>
    </>
  )
}
export default CoursesHome;
