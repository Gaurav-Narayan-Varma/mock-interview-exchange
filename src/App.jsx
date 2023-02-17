import React from "react";
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import "./global.css";


import {AlreadyScheduled1} from "./screens/AlreadyScheduled1"
import {BG1} from "./screens/BG1"
import {CalendarDrawer1} from "./screens/CalendarDrawer"
import {Calendar1} from "./screens/Calendar1"
import {Calendly1} from "./screens/Calendly"
import {EditProfilePosts1} from "./screens/EditProfilePosts1"
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
      <Route path="/" element={<Layout />}>
        <Route path="AlreadyScheduled1" element={<AlreadyScheduled1 />} /> 
        <Route path="BG1" element={<BG1 />} /> 
        <Route path="CalendarDrawer1" element={<CalendarDrawer1 />} /> 
        <Route path="Calendar1" element={<Calendar1 />} /> 
        <Route path="Calendly1" element={<Calendly1 />} /> 
        <Route path="EditProfilePosts1" element={<EditProfilePosts1 />} /> 
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

      </Route>
   </Routes>
</BrowserRouter>
);


function Layout() {
  return (
    <div>
    
      <nav>
       
<Link to="AlreadyScheduled1">AlreadyScheduled1</Link>
        <Link to="BG1">BG1</Link>
        <Link to="CalendarDrawer1">CalendarDrawer1</Link>
        <br />
        <Link to="Calendar1">Calendar1</Link>
        <Link to="Calendly1">Calendly1</Link>
        <br />
        <Link to="EditProfilePosts1">EditProfilePosts1</Link>
        <Link to="Feed1">Feed1</Link>
        <br />
        <Link to="Filter1">Filter1</Link>
        <Link to="InterviewConfirmed1">InterviewConfirmed1</Link>
        
        <br />
        <Link to="JobSeekerProfilePosts1">JobSeekerProfilePosts1</Link>
        <Link to="LogIn1">LogIn1</Link>
        <Link to="Market1">Market1</Link>
        <br />
        <Link to="Messages1">Messages1</Link>
        
        <Link to="NotScheduled1">NotScheduled1</Link>
        <Link to="ProfilePosts1">ProfilePosts1</Link>
        <br />
        <Link to="Rating1">Rating1</Link>
        <Link to="SearchMessages1">SearchMessages1</Link>
        <br /><Link to="Search1">Search1</Link>

        
        <Link to="Tip1">Tip1</Link>
        <Link to="WelcomeToMIE1">WelcomeToMIE1</Link>


         
        {/* Outlet does the rendering output */}
         <Outlet />
         
      </nav>
    </div>
  );
}


