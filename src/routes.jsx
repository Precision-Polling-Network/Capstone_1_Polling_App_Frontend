// All route definitions live here instead of inline in main.jsx.
// Navbar renders once, above <Routes>, so it shows on every page
// no matter which route is active.
// ============================================================

// TODO (Part 1): bring in what you need from react-router to define
//   routes. Docs: https://reactrouter.com/start/declarative/routing
// TODO (Part 2): bring in the Navbar component
// TODO (Part 1): bring in the Home page
// TODO (Part 3): bring in the QuoteDetail page
// TODO (Part 4): bring in the AddQuote page
// TODO (Part 5): bring in the NotFound page
import { BrowserRouter, Routes, Route } from 'react-router';
import {Navbar} from 'Navbar';
import Home from '../pages/Home'
import Results from '../pages/Results'
import CreatePoll from '../pages/CreatePoll';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <>
      {/* TODO (Part 2): render the navbar here, above your routes,
          so it shows no matter which page is active */}
       <Navbar/>
         <Routes>
            <Route index element={<Home/>}/>
            <Route path="Results" element={<Results/>}/>
            <Route path="CreatePoll" element={<CreatePoll/>}/>
            <Route path="NotFound" element={<NotFound/>}/>
         </Routes>
        
      {/*
        TODO: define your routes below.
        Part 1 — Home renders at the root path "/". This is an
          "index" route: it renders at the parent's own path
          instead of a sub-path.

        Part 3 — QuoteDetail renders at a dynamic path that captures
          an id from the URL (a "path parameter").

        Part 4 — AddQuote renders at a fixed path.

        Part 5 — NotFound catches anything that didn't match any
          route above. It must come LAST, or it swallows every
          route below it.

        Docs: https://reactrouter.com/start/declarative/routing
      */}
      
        
    </>
  )
}

export default AppRoutes