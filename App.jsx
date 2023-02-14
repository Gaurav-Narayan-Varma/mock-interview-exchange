import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePosts from "./components/ProfilePosts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|profile-posts)">
          <ProfilePosts {...profilePostsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const iOSStatusBarBlackData = {
    leftSide: "/img/left-side@2x.png",
    battery: "/img/battery@2x.png",
};

const iOSStatusBarWhiteData = {
    iOSStatusBarBlackProps: iOSStatusBarBlackData,
};

const pageHeaderData = {
    settings: "Settings",
    title: "Profile",
    logout: "Logout",
};

const segmentedControlStructureData = {
    search: "Search",
    posts: "Past Interviews",
    photos: "Resume",
};

const segmentedControlLeftData = {
    segmentedControlStructureProps: segmentedControlStructureData,
};

const contentContentBlockSmall1Data = {
    header: "Past Interviews",
    heLlWantToUseYo: <React.Fragment>He&#x27;ll want to use your yacht, and I <br />don&#x27;t want this thing smelling like fish.</React.Fragment>,
};

const buttonPrimary1Data = {
    children: "Message",
};

const buttonPrimary2Data = {
    children: "      Pi Tip",
    className: "button-primary-1",
};

const contentContentBlockSmall2Data = {
    header: "Header",
    heLlWantToUseYo: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    className: "content-content-block-small-2",
};

const contentContentBlockSmall3Data = {
    header: "Header",
    heLlWantToUseYo: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    className: "content-content-block-small-3",
};

const contentContentBlockSmall4Data = {
    header: "Header",
    heLlWantToUseYo: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
    className: "content-content-block-small",
};

const profilePostsData = {
    ellipse6: "/img/ellipse-6@2x.png",
    name: "Victoria Robertson",
    aMantraGoesHere: "A mantra goes here",
    number: "5",
    image3: "/img/image-3@2x.png",
    iOSStatusBarWhiteProps: iOSStatusBarWhiteData,
    pageHeaderProps: pageHeaderData,
    segmentedControlLeftProps: segmentedControlLeftData,
    contentContentBlockSmall1Props: contentContentBlockSmall1Data,
    buttonPrimary1Props: buttonPrimary1Data,
    buttonPrimary2Props: buttonPrimary2Data,
    contentContentBlockSmall2Props: contentContentBlockSmall2Data,
    contentContentBlockSmall3Props: contentContentBlockSmall3Data,
    contentContentBlockSmall4Props: contentContentBlockSmall4Data,
};

