import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const Rating1 = ({}) => {
  
  const navigate = useNavigate();
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Rating>
      <BG>
        <Text2>Rate</Text2>
        <Group>
          <Star src={`https://file.rendit.io/n/xjfr1UNFJ1Z0uLrInKjx.svg`} />
          <Star1 src={`https://file.rendit.io/n/xjfr1UNFJ1Z0uLrInKjx.svg`} />
          <Star2 src={`https://file.rendit.io/n/xjfr1UNFJ1Z0uLrInKjx.svg`} />
          <Star3 src={`https://file.rendit.io/n/xjfr1UNFJ1Z0uLrInKjx.svg`} />
          <Star4 src={`https://file.rendit.io/n/xjfr1UNFJ1Z0uLrInKjx.svg`} />
        </Group>
        <Text1>Give feedback</Text1>
        <BG1>
          <Search>
            Give feedback on behavioral skills
            <br /> and ability to question
          </Search>
        </BG1>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ILoveIt>Done!</ILoveIt>
        </ButtonPrimary>
      </BG>
    </Rating>
  );
};

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 193px 16px 192px 16px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  padding: 15px 16px 69px 16px;
  box-sizing: border-box;
  background-color: white;
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 0px 122px 0px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 59px 19px 0px;
  box-sizing: border-box;
`;
const Star = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Star1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Star2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Star3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Star4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 50px 34px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: center;
  margin: 0px 0px 53px 0px;
  padding: 32px 16px 12px 16px;
  box-sizing: border-box;
  background-size: cover;
`;
const Search = styled.div`
  align-self: flex-start;
  color: #666666;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 0px;
  padding-top: 16px;
  padding-right: 133px;
  padding-bottom: 16px;
  padding-left: 133px;
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

  text-align: center;
  box-sizing: border-box;
`;
