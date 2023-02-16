import React from "react";
import styled from "styled-components";

export const AlreadyScheduled1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <AlreadyScheduled>
      <Text1>Interview Coming Up</Text1>
      <ImageBlock>
        <Ellipse src={`https://file.rendit.io/n/d7Eisc9m8CoyQxPoZPJa.png`} />
      </ImageBlock>
      <Group>
        <Group1>
          <Text5>Victoria/Joe JS</Text5>
          <Text4>Technical Interviewer</Text4>
        </Group1>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ILoveIt>See profile</ILoveIt>
        </ButtonPrimary>
      </Group>
      <Paragraph>
        Worked at Google for a decade ...
        <br />
        <br />
        Can do technical interviews
      </Paragraph>
      <Text2>🎦</Text2>
      <Text3>Interview starts in 20 minutes..</Text3>
    </AlreadyScheduled>
  );
};

const AlreadyScheduled = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 16px 212px 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 19px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ImageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin: 0px 0px 10px 0px;
  padding: 19px 88px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Ellipse = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 96.5%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 56.72%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 6px 0px 0px 0px;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 47.54%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 10px 0px;
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
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  align-self: flex-start;
  margin: 0px 0px 64px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 0px 146px 2px 0px;
  font-size: 50px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-end;
  margin: 0px 44px 0px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
