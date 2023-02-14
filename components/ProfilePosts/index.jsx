import React from "react";
import IOSStatusBarWhite from "../IOSStatusBarWhite";
import PageHeader from "../PageHeader";
import SegmentedControlLeft from "../SegmentedControlLeft";
import ContentContentBlockSmall from "../ContentContentBlockSmall";
import ButtonPrimary from "../ButtonPrimary";
import "./ProfilePosts.css";

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
      <div className="profile-posts screen">
        <div className="overlap-group6">
          <div className="rectangle-239"></div>
          <img className="ellipse-6" src={ellipse6} alt="Ellipse 6" />
          <IOSStatusBarWhite iOSStatusBarBlackProps={iOSStatusBarWhiteProps.iOSStatusBarBlackProps} />
          <PageHeader
            settings={pageHeaderProps.settings}
            title={pageHeaderProps.title}
            logout={pageHeaderProps.logout}
          />
          <div className="name-bio">
            <div className="name">{name}</div>
            <div className="a-mantra-goes-here inter-semi-bold-black-16px">{aMantraGoesHere}</div>
          </div>
          <SegmentedControlLeft
            segmentedControlStructureProps={segmentedControlLeftProps.segmentedControlStructureProps}
          />
          <ContentContentBlockSmall
            header={contentContentBlockSmall1Props.header}
            heLlWantToUseYo={contentContentBlockSmall1Props.heLlWantToUseYo}
          />
          <div className="group-18">
            <img className="icon-star-1" src="/img/star-1.svg" alt="icon-star" />
            <img className="icon-star" src="/img/star-1.svg" alt="icon-star" />
            <img className="icon-star" src="/img/star-1.svg" alt="icon-star" />
            <img className="icon-star" src="/img/star-1.svg" alt="icon-star" />
            <img className="icon-star" src="/img/star-1.svg" alt="icon-star" />
            <img className="icon-star-2" src="/img/star-1.svg" alt="icon-star" />
          </div>
          <ButtonPrimary>{buttonPrimary1Props.children}</ButtonPrimary>
          <ButtonPrimary className={buttonPrimary2Props.className}>{buttonPrimary2Props.children}</ButtonPrimary>
          <div className="number">{number}</div>
          <img className="image-3" src={image3} alt="image 3" />
        </div>
        <ContentContentBlockSmall
          header={contentContentBlockSmall2Props.header}
          heLlWantToUseYo={contentContentBlockSmall2Props.heLlWantToUseYo}
          className={contentContentBlockSmall2Props.className}
        />
        <ContentContentBlockSmall
          header={contentContentBlockSmall3Props.header}
          heLlWantToUseYo={contentContentBlockSmall3Props.heLlWantToUseYo}
          className={contentContentBlockSmall3Props.className}
        />
        <ContentContentBlockSmall
          header={contentContentBlockSmall4Props.header}
          heLlWantToUseYo={contentContentBlockSmall4Props.heLlWantToUseYo}
          className={contentContentBlockSmall4Props.className}
        />
      </div>
    </div>
  );
}

export default ProfilePosts;
