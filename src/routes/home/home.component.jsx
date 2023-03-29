import react, { useContext, useEffect } from "react";
import { CoursesContext } from '../../context/courses.context';
import { getCourses } from '../../utils/firebase/firebase.utils';
import "./home.styles.scss";

const Home = () => {
  const { courses, setCourses } = useContext(CoursesContext);
    useEffect(async() => {
        const allCourses = await getCourses();
        if(courses.length === 0){
            setCourses(allCourses);
        }
    }, [])

  return (
    <div className="poster">
      {
        courses.forEach((eachCourse)=>{
          
        })
      }
    </div>
  );
};

export default Home;
