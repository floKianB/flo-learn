import React, { useContext, useEffect } from 'react';
import './courses.styles.scss';

import { getCourses } from '../../utils/firebase/firebase.utils';
import CourseCard from '../../components/course-card/course-card.component';
import { CoursesContext } from '../../context/courses.context';


function Shop() {
    const { courses, setCourses } = useContext(CoursesContext);
    useEffect(async() => {
        const allCourses = await getCourses();
        if(courses.length === 0){
            setCourses(allCourses);
        }
    }, [])

    return (
        <div className="products-container">
            {
                courses.map((course) => {
                    return (
                        <CourseCard key={course.id} course={course.data()}/>
                    );
                })
            }
        </div>
    )
}

export default Shop;