import React from "react";
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

import "./global.css";


import {AlreadyScheduled1} from "./screens/AlreadyScheduled1"
import {BG1} from "./screens/Feedback1"
import {CalendarDrawer1} from "./screens/CalendarDrawer"
import {Calendar1} from "./screens/Calendar1"
import {Calendly1} from "./screens/Calendly"
import {Feed1} from "./screens/Feed1"
import {Filter1} from "./screens/Filter1"
import {InterviewConfirmed1} from "./screens/InterviewConfirmed1"
import {JobSeekerProfilePosts1} from "./screens/JobSeekerProfilePosts1"
import {LogIn1} from "./screens/LogIn1"
import {Market1} from "./screens/Market1"
import {Messages1} from "./screens/Messages1"
import {NotScheduled1} from "./screens/NotScheduled1"
import {ProfilePosts1} from "./screens/ProfilePosts"
import {Rating1} from "./screens/Rating1"
import {SearchMessages1} from "./screens/SearchMessages1"
import {Search1} from "./screens/Search1"
import {Tip1} from "./screens/Tip1"
import {WelcomeToMIE1} from "./screens/WelcomeToMIE1"



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<WelcomeToMIE1 />} />


        <Route path="AlreadyScheduled1" element={<AlreadyScheduled1 />} /> 
        <Route path="BG1" element={<BG1 />} /> 
        <Route path="CalendarDrawer1" element={<CalendarDrawer1 />} /> 
        <Route path="Calendar1" element={<Calendar1 />} /> 
        <Route path="Calendly1" element={<Calendly1 />} /> 
        <Route path="Feed1" element={<Feed1 />} /> 
        <Route path="Filter1" element={<Filter1 />} /> 
        <Route path="InterviewConfirmed1" element={<InterviewConfirmed1 />} /> 
        <Route path="JobSeekerProfilePosts1" element={<JobSeekerProfilePosts1 />} /> 
        <Route path="LogIn1" element={<LogIn1 />} /> 
        <Route path="Market1" element={<Market1 />} /> 
        <Route path="Messages1" element={<Messages1 />} /> 
        <Route path="NotScheduled1" element={<NotScheduled1 />} /> 
        <Route path="ProfilePosts1" element={<ProfilePosts1 />} /> 
        <Route path="Rating1" element={<Rating1 />} /> 
        <Route path="SearchMessages1" element={<SearchMessages1 />} /> 
        <Route path="Search1" element={<Search1 />} /> 
        <Route path="Tip1" element={<Tip1 />} /> 
        <Route path="WelcomeToMIE1" element={<WelcomeToMIE1 />} /> 

   </Routes>
</BrowserRouter>
);


function Layout() {
  return (
    <div>
    
      <nav>

   
         <Outlet />
         
      </nav>
    </div>
  );
}


