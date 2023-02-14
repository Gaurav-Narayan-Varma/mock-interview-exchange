import React from "react";
function App() {
  return <ProfilePosts {...profilePostsData} />;
}
export default App;
function ProfilePosts(props) {
  const {
    ellipse6,
    name,
    aMantraGoesHere,
    number,
    image3,
    iOSStatusBarWhiteProps,
    pageHeaderProps,
    segmentedControlLeftProps,
    contentContentBlockSmall1Props,
    buttonPrimary1Props,
    buttonPrimary2Props,
    contentContentBlockSmall2Props,
    contentContentBlockSmall3Props,
    contentContentBlockSmall4Props,
  } = props;
  return (
    <div className="container-center-horizontal">
      {" "}
      <div className="profile-postsscreen">
        {" "}
        <div className="overlap-group6">
          {" "}
          <div className="rectangle-239"></div>{" "}
          <img className="ellipse-6" src={ellipse6} alt="Ellipse 6" />{" "}
          <IOSStatusBarWhite
            iOSStatusBarBlackProps={
              iOSStatusBarWhiteProps.iOSStatusBarBlackProps
            }
          />{" "}
          <PageHeader
            settings={pageHeaderProps.settings}
            title={pageHeaderProps.title}
            logout={pageHeaderProps.logout}
          />{" "}
          <div className="name-bio">
            {" "}
            <div className="nameinter-semi-bold-black-30px"> {name} </div>{" "}
            <div className="a-mantra-goes-hereinter-semi-bold-black-16px">
              {" "}
              {aMantraGoesHere}{" "}
            </div>{" "}
          </div>{" "}
          <SegmentedControlLeft
            segmentedControlStructureProps={
              segmentedControlLeftProps.segmentedControlStructureProps
            }
          />{" "}
          <ContentContentBlockSmall
            header={contentContentBlockSmall1Props.header}
            heLlWantToUseYo={contentContentBlockSmall1Props.heLlWantToUseYo}
          />{" "}
          <div className="group-18">
            {" "}
            <img
              className="icon-star-1"
              src="star-1.svg"
              alt="icon-star"
            />{" "}
            <img className="icon-star" src="star-1.svg" alt="icon-star" />{" "}
            <img className="icon-star" src="star-1.svg" alt="icon-star" />{" "}
            <img className="icon-star" src="star-1.svg" alt="icon-star" />{" "}
            <img className="icon-star" src="star-1.svg" alt="icon-star" />{" "}
            <img className="icon-star-2" src="star-1.svg" alt="icon-star" />{" "}
          </div>{" "}
          <ButtonPrimary>{buttonPrimary1Props.children}</ButtonPrimary>{" "}
          <ButtonPrimary className={buttonPrimary2Props.className}>
            {" "}
            {buttonPrimary2Props.children}{" "}
          </ButtonPrimary>{" "}
          <div className="number"> {number} </div>{" "}
          <img className="image-3" src={image3} alt="image 3" />{" "}
        </div>{" "}
        <ContentContentBlockSmall
          header={contentContentBlockSmall2Props.header}
          heLlWantToUseYo={contentContentBlockSmall2Props.heLlWantToUseYo}
          className={contentContentBlockSmall2Props.className}
        />{" "}
        <ContentContentBlockSmall
          header={contentContentBlockSmall3Props.header}
          heLlWantToUseYo={contentContentBlockSmall3Props.heLlWantToUseYo}
          className={contentContentBlockSmall3Props.className}
        />{" "}
        <ContentContentBlockSmall
          header={contentContentBlockSmall4Props.header}
          heLlWantToUseYo={contentContentBlockSmall4Props.heLlWantToUseYo}
          className={contentContentBlockSmall4Props.className}
        />{" "}
      </div>{" "}
    </div>
  );
}
function IOSStatusBarWhite(props) {
  const { iOSStatusBarBlackProps } = props;
  return (
    <div className="i-os-status-bar-white">
      {" "}
      <IOSStatusBarBlack
        leftSide={iOSStatusBarBlackProps.leftSide}
        battery={iOSStatusBarBlackProps.battery}
      />{" "}
    </div>
  );
}
function IOSStatusBarBlack(props) {
  const { leftSide, battery } = props;
  return (
    <div className="i-os-status-bar-black">
      {" "}
      <img className="left-side" src={leftSide} alt="Left Side" />{" "}
      <div className="overlap-group">
        {" "}
        <img className="notch" src="notch.svg" alt="Notch" />{" "}
        <div className="right-side">
          {" "}
          <img
            className="mobile-signal"
            src="mobile-signal.svg"
            alt="Mobile Signal"
          />{" "}
          <img className="icon-signal" src="wifi.svg" alt="icon-signal" />{" "}
          <img className="battery" src={battery} alt="Battery" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
function PageHeader(props) {
  const { settings, title, logout } = props;
  return (
    <div className="page-header">
      {" "}
      <div className="settingsinter-medium-white-16px"> {settings} </div>{" "}
      <h1 className="title"> {title} </h1>{" "}
      <div className="logoutinter-medium-white-16px"> {logout} </div>{" "}
    </div>
  );
}
function SegmentedControlLeft(props) {
  const { segmentedControlStructureProps } = props;
  return (
    <div className="segmented-control-left">
      {" "}
      <SegmentedControlStructure
        search={segmentedControlStructureProps.search}
        posts={segmentedControlStructureProps.posts}
        photos={segmentedControlStructureProps.photos}
      />{" "}
    </div>
  );
}
function SegmentedControlStructure(props) {
  const { search, posts, photos } = props;
  return (
    <div className="segmented-control-structure">
      {" "}
      <div className="overlap-group1">
        {" "}
        <div className="searchinter-medium-silver-16px"> {search} </div>{" "}
        <div className="overlap-group-1">
          {" "}
          <div className="postsinter-semi-bold-aqua-forest-16px">
            {" "}
            {posts}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="photosinter-medium-silver-16px"> {photos} </div>{" "}
    </div>
  );
}
function ContentContentBlockSmall(props) {
  const { header, heLlWantToUseYo, className } = props;
  return (
    <div className={`content-content-block-small-1 ${className || ""}`}>
      {" "}
      <div className="content-block"></div>{" "}
      <div className="flex-col">
        {" "}
        <div className="flex-row-1">
          {" "}
          <div className="header-1inter-semi-bold-black-16px">
            {" "}
            {header}{" "}
          </div>{" "}
          <div className="x8m-agointer-normal-silver-14px"> 8m ago </div>{" "}
        </div>{" "}
        <div className="overlap-group-2">
          {" "}
          <p className="hell-want-to-use-yointer-normal-black-14px">
            {" "}
            {heLlWantToUseYo}{" "}
          </p>{" "}
          <img
            className="divider-line"
            src="divider-line.svg"
            alt="Divider Line"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
function ButtonPrimary(props) {
  const { children, className } = props;
  return (
    <div className={`button-primary ${className || ""}`}>
      {" "}
      <div className="i-love-itinter-semi-bold-white-16px">
        {" "}
        {children}{" "}
      </div>{" "}
    </div>
  );
}
const iOSStatusBarBlackData = {
  leftSide: "left-side.png",
  battery: "battery.png",
};
const iOSStatusBarWhiteData = { iOSStatusBarBlackProps: iOSStatusBarBlackData };
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
  heLlWantToUseYo: (
    <React.Fragment>
      {" "}
      He&#x27;ll want to use your yacht, and I <br /> don&#x27;t want this thing
      smelling like fish.{" "}
    </React.Fragment>
  ),
};
const buttonPrimary1Data = { children: "Message" };
const buttonPrimary2Data = {
  children: " Pi Tip",
  className: "button-primary-1",
};
const contentContentBlockSmall2Data = {
  header: "Header",
  heLlWantToUseYo:
    "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  className: "content-content-block-small-2",
};
const contentContentBlockSmall3Data = {
  header: "Header",
  heLlWantToUseYo:
    "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  className: "content-content-block-small-3",
};
const contentContentBlockSmall4Data = {
  header: "Header",
  heLlWantToUseYo:
    "He'll want to use your yacht, and I don't want this thing smelling like fish.",
  className: "content-content-block-small",
};
const profilePostsData = {
  ellipse6: "ellipse-6.png",
  name: "Victoria Robertson",
  aMantraGoesHere: "A mantra goes here",
  number: "5",
  image3: "image-3.png",
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
