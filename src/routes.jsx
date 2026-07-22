
import { BrowserRouter, Routes, Route } from 'react-router';
import { useParams, useSearchParams } from 'react-router';
import Home from './pages/Home'
// import Results from '../pages/Results'
// import CreatePoll from '../pages/CreatePoll';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <>
       {/* <Navbar/> */}
         <Routes>
            <Route path= '/' element={<Home/>}/>
            {/* <Route path="Results" element={<Results/>}/>
            <Route path="CreatePoll" element={<CreatePoll/>}/> */}
            <Route path="*" element={<NotFound/>}/>
         </Routes>
        
    </>
  )
}

export default AppRoutes