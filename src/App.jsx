import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Calendly1 from "./Calendly1"
import BG1 from "./BG"
import Calendar1 from "./Calendar"


export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Calendly" element={<Calendly1 />} />
          <Route path="BG1" element={<BG1 />} />
          <Route path="Calendar" element={<Calendar1 />} />
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
          
            <Link to="/Calendly">Calendar</Link>
         
            <Link to="/BG1">BG1</Link>
            
            <Link to="/Calendar">Calendar</Link>
         
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>HomeScreen</h2>
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
