import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
import {SignUp1} from "./screens/SignUp1"
import {Tip1} from "./screens/Tip1"
import {WelcomeToMIE1} from "./screens/WelcomeToMIE1"


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="Calendly" element={<Calendly1 />} /> 
          <Route path="Calendar" element={<Calendar1 />} />
          <Route path="ProfilePosts" element={<ProfilePosts1 />} />
          <Route path="InterviewConfirmed" element={<InterviewConfirmed1 />} /> 
          {/* 
          
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} />
          <Route path="" element={< />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}

          
        </Route>
      </Routes>
    </BrowserRouter>
);



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
            
         
      </nav>
    </div>
  );
}


