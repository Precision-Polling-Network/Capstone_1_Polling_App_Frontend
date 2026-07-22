
import { BrowserRouter, Routes, Route } from 'react-router';
import { useParams, useSearchParams } from 'react-router';
import Home from './pages/Home'
import Poll from './pages/Poll'
// import Results from '../pages/Results'
// import CreatePoll from '../pages/CreatePoll';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <>
       {/* <Navbar/> */}
         <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= '/poll/:id' element={<Poll/>}/>
            {/* <Route path="/pages/Results" element={<Results/>}/>
            <Route path="/pages/CreatePoll" element={<CreatePoll/>}/> */}
            {/* <Route path="*" element={<NotFound/>}/> */}
         </Routes>
        
    </>
  )
}

export default AppRoutes