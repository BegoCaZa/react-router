import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';

import Contact from '../../pages/contact/Contact';
import Blog from '../../pages/blog/Blog';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default Router;
