import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Courses from './routes/Courses/courses.component';
import ContactUs from './routes/ContactUs/contactUs.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/Authentication/Authentication.component';
import CheckOut from './routes/check-out/check-out.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='courses' element={<Courses />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='check-out' element={<CheckOut />} />
        <Route path='authentication' element={<Authentication />} />
      </Route>
      
    </Routes>
  );
};

export default App;
