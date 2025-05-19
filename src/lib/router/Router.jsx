import { Routes, Route } from 'react-router-dom';
import SayHello from '../../pages/sayHello/SayHello';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<SayHello page='HOME' />} />
      <Route path='/blog' element={<SayHello page='BLOG' />} />
      <Route path='/contact' element={<SayHello page='CONTACT' />} />
    </Routes>
  );
};

export default Router;
