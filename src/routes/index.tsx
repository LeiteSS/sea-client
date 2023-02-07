import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import SignIn from '../pages/User/SignIn';
import Objectives from '../pages/Objectives';
import Home from '../pages/User/Home';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path='/objective' element={<Objectives />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router