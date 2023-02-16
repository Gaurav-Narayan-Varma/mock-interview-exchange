import React from "react";
import styled from "styled-components";

export const BGRootRootRoot1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BGRootRootRoot>
      <Handle />
      <Text1>Interviews Joe Job Seeker</Text1>
      <Group>
        <Text2>Date: 2-12-23</Text2>
        <Star>
          <Text3>5</Text3>
        </Star>
      </Group>
      <Paragraph>
        Feedback: I thought Victoria was a great interviewer! She gave good
        feedback
      </Paragraph>
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <ClickMe>Close</ClickMe>
      </ButtonPrimary>
    </BGRootRootRoot>
  );
};

const BGRootRootRoot = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 16px 19px 45px 19px;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Handle = styled.div`
  width: 32px;
  height: 4px;
  flex-shrink: 0;
  margin: 0px 152px 26px 0px;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: #e7e7e7;
`;
const Text1 = styled.div`
  margin: 0px 16px 0px 0px;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  gap: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 64px 4px 0px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 10px 0px 3px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Star = styled.div`
  width: 26.67%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9px 11px 6px 11px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/UadM6UfxASE1qAuPRJ7U.svg");
`;
const Text3 = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: 92.28%;
  margin: 0px 8px 26px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 97.03%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  padding-top: 16px;
  padding-right: 141px;
  padding-bottom: 16px;
  padding-left: 141px;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
