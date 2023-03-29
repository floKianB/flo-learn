import react, { useContext, useEffect } from "react";
import { CoursesContext } from '../../context/courses.context';
import { getCourses } from '../../utils/firebase/firebase.utils';
import "./home.styles.scss";

const Home = () => {
  const { courses, setCourses, tags, setTags } = useContext(CoursesContext);
    useEffect(async() => {
        const allCourses = await getCourses();
        if(courses.length === 0){
            setCourses(allCourses);
        }
        const listOfAllTags = [];
        allCourses.forEach((eachCourse)=>{
          listOfAllTags.push(eachCourse.data().tag);
        });
        setTags([...new Set(listOfAllTags)])
    }, [])

    useEffect(()=>{console.log(tags)}, [tags])
  return (
      <>
        <div className="poster">
        
        </div>

        {
          tags.map((eachCourseTag)=>{
            return(<h2>{eachCourseTag}</h2>);
          })
        }

      </>
      
  );
};

export default Home;
