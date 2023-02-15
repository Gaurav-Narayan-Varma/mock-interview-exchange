import React from "react";
import styled from "styled-components";

export const NotScheduledRootRootRoot1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimary1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <NotScheduledRootRootRoot>
      <Text1>Overview</Text1>
      <ImageBlock>
        <Ellipse src={`https://file.rendit.io/n/OkNCqWiV8o0o0dL7u6BU.png`} />
      </ImageBlock>
      <FlexColumn>
        <Text2>Victoria/Joe JS</Text2>
        <Text3>Technical Interviewer</Text3>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ILoveIt>See profile</ILoveIt>
        </ButtonPrimary>
      </FlexColumn>
      <Paragraph>
        Worked at Google for a decade ...
        <br />
        <br />
        Can do technical interviews
      </Paragraph>
      <Paragraph1>
        When you click ‘Find a time!’ it will take you to their Calendly, find a
        time and then when you come back to this app, enter in the time you
        scheduled
      </Paragraph1>
      <ButtonPrimary1
        onClick={(e) => ButtonPrimary1Function(e, "ButtonPrimary1")}
      >
        <ILoveIt1>Find a time!</ILoveIt1>
      </ButtonPrimary1>
    </NotScheduledRootRootRoot>
  );
};

const NotScheduledRootRootRoot = styled.div`
  height: 768px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 16px;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text1 = styled.div`
  width: 139px;
  height: 36px;
  align-self: flex-end;
  margin: 0px 101px 2px 0px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
`;
const ImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 10px 0px;
  padding: 19px 88px 19px 97px;
  border-radius: 8px;
  background-color: #f6f6f6;
`;
const Ellipse = styled.img`
  width: 158px;
  min-width: 0px;
  height: 158px;
  min-height: 0px;
`;
const FlexColumn = styled.div`
  width: 145px;
  height: 62px;
  position: relative;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 12px 0px 186px;
`;
const Text2 = styled.div`
  width: 343px;
  height: 29px;
  left: 0px;
  top: 6px;
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
`;
const Text3 = styled.div`
  width: 343px;
  height: 19px;
  left: 0px;
  top: 43px;
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
`;
const ButtonPrimary = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  padding-top: 16px;
  padding-right: 31px;
  padding-bottom: 17px;
  padding-left: 31px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ILoveIt = styled.div`
  width: 83px;
  height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
`;
const Paragraph = styled.div`
  width: 343px;
  height: 57px;
  margin: 0px 0px 103px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
`;
const Paragraph1 = styled.div`
  width: 343px;
  height: 13px;
  margin: 0px 0px 81px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
`;
const ButtonPrimary1 = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 0px;
  padding-top: 16px;
  padding-right: 111px;
  padding-bottom: 16px;
  padding-left: 111px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ILoveIt1 = styled.div`
  width: 90px;
  height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
`;
