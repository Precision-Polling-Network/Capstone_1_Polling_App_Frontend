
import { BrowserRouter, Routes, Route } from 'react-router';
import { useParams, useSearchParams } from 'react-router';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Poll from './pages/Poll'
import CreatePoll from './pages/CreatePoll';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <>
       <NavBar/>
         <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= '/poll/:id' element={<Poll/>}/>
            <Route path="/CreatePoll" element={<CreatePoll/>}/>
            <Route path="*" element={<NotFound/>}/>
         </Routes>
        
    </>
  )
}

export default AppRoutes