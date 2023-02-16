import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";


function  BG1 ({}) {

  const navigate = useNavigate();

  
  const ButtonPrimary1Function = (e, name) => {      
      
    navigate("/Calendar");

  };
  const ButtonPrimary3Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimary4Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BG>
      <Handle />
      <Text1>Joe Job Seeker wants you!</Text1>
      <Group>
        <Text2>Time and Date: 2-12-23</Text2>
        <Text3>Tip : 2 pi network coin</Text3>
        <Star>
          <Text4>5</Text4>
        </Star>
        <Image1 src={`https://file.rendit.io/n/sColElk4pKkxEfU0x4M2.png`} />
      </Group>
      <ButtonPrimary1
        onClick={(e) => ButtonPrimary1Function(e, "ButtonPrimary1")}
      >
        <ClickMe1>Joe’s profile</ClickMe1>
        <ButtonPrimary2>
          <ClickMe2>Joe’s profile</ClickMe2>
        </ButtonPrimary2>
      </ButtonPrimary1>
      <ButtonPrimary3
        onClick={(e) => ButtonPrimary3Function(e, "ButtonPrimary3")}
      >
        <ClickMe3>Accept</ClickMe3>
      </ButtonPrimary3>
      <ButtonPrimary4
        onClick={(e) => ButtonPrimary4Function(e, "ButtonPrimary4")}
      >
        <ClickMe4>Decline</ClickMe4>
      </ButtonPrimary4>
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <ClickMe>Close</ClickMe>
      </ButtonPrimary>
    </BG>
  );
};

export default  BG1;

const BG = styled.div`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 19px 43px 19px;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Handle = styled.div`
  width: 32px;
  height: 4px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 152px 26px 0px;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: #e7e7e7;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 14px 0px 0px;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 236px;
  height: 70px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  margin: 0px 0px 10px 37px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  width: 182px;
  height: 19px;
  left: 17px;
  top: 8px;
  position: absolute;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  width: 169px;
  height: 19px;
  left: 44px;
  top: 41px;
  position: absolute;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Star = styled.div`
  width: 32px;
  height: 32px;
  left: 204px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9px 11px 6px 11px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/LoiO8ueoN393qikFk3Ox.svg");
`;
const Text4 = styled.div`
  align-self: center;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  width: 44px;
  min-width: 0px;
  height: 39px;
  min-height: 0px;
  left: 0px;
  top: 31px;
  position: absolute;
  box-sizing: border-box;
`;
const ButtonPrimary1 = styled.button`
  width: 97.03%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 9px 0px;
  padding: 0px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ClickMe1 = styled.div`
  width: 93px;
  height: 19px;
  left: 117px;
  top: 16px;
  position: absolute;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 16px 119px;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const ClickMe2 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary3 = styled.button`
  width: 97.03%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  margin: 0px 0px 13px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 137px;
  padding-bottom: 16px;
  padding-left: 137px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ClickMe3 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary4 = styled.button`
  width: 97.03%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 135px;
  padding-bottom: 16px;
  padding-left: 135px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #9f3d3d;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ClickMe4 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 97.03%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
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
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
