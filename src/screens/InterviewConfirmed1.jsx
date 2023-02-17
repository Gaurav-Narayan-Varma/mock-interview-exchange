import React from "react";
import styled from "styled-components";

export const InterviewConfirmed1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <InterviewConfirmed>
      <BG>
        <Text1>Interview Confirmed!</Text1>
        <Paragraph>
          Consequat velit qui adipisicing sunt do reprehenderit ad laborum
          tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
          duis sit esse aliqua esse ex dolore esse. Consequat velit qui
          adipisicing sunt.
        </Paragraph>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Go to home</ClickMe>
        </ButtonPrimary>
        <Text2>Message them!</Text2>
      </BG>
    </InterviewConfirmed>
  );
};

const InterviewConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 224px 16px 225px 16px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/bvafCvzN9ss8ZridwdDS.svg");
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 2px 0px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: auto;
  margin: 0px 0px 29px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;

  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 2px 0px;
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
const ClickMe = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 95px;
  color: #5db074;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
