import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Calendly1 from "./Calendly"
import BG1 from "./CalendarDrawer"
import Calendar1 from "./Calendar"

import {ProfilePosts1} from "./ProfilePosts"

import {InterviewConfirmed1} from "./InterviewConfirmed"



export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Calendly" element={<Calendly1 />} />
          <Route path="BG1" element={<BG1 />} />
          <Route path="Calendar" element={<Calendar1 />} />
          <Route path="ProfilePosts" element={<ProfilePosts1 />} />
          <Route path="InterviewConfirmed" element={<InterviewConfirmed1 />} />
{/* 
          
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
            <Link to="/">Home</Link>
            <Link to="/Calendly">Calendly</Link>
           
            <br />
             <Link to="/BG1">BG1</Link>
            <Link to="/Calendar">Calendar</Link>
            <Link to="/ProfilePosts">ProfilePosts1</Link>

            <br />
            
            <Link to="/InterviewConfirmed">Confirmed</Link>
            <Link to="/ProfilePosts">ProfilePosts1</Link>
            <Link to="/ProfilePosts">ProfilePosts1</Link>
            
            <br />
            <Link to="/ProfilePosts">ProfilePosts1</Link>
            <Link to="/ProfilePosts">ProfilePosts1</Link>
         
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
