import { createContext, useState } from 'react';



export const CoursesContext = createContext({
    courses: [],
});

export const CoursesProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [tags, setTags] = useState([]);
    const value = { courses, setCourses, tags, setTags };
    return (
        <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
    );
}