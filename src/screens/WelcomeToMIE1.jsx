import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const WelcomeToMIE1 = ({}) => {
  const navigate = useNavigate();


  const ButtonPrimaryFunction = (e, name) => {

      navigate("/Market1");
  };
  return (
    <WelcomeToMIE>
      <BG>
        <Text2>Welcome to Mock Interview Exchange!</Text2>
        <Text3>Improve your coding skills and prepare for job interviews by connecting with top-rated interview hosts for free.
          If you find a host whose guidance you appreciate, express your gratitude by 
          tipping them with Pi, a user-friendly and inclusive cryptocurrency with a low mining barrier.</Text3>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Login</ClickMe>
        </ButtonPrimary>
      </BG>
    </WelcomeToMIE>
  );
};

const WelcomeToMIE = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 44px 16px 25px 16px;
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
  align-items: center;
  padding: 32px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/pu1y9iDQNqEcYgjW1pcD.svg");
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 0px 8px 0px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  margin: 0px 0px 124px 0px;
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
  align-self: stretch;
  margin: 0px 0px 2px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 128px;
  padding-bottom: 16px;
  padding-left: 128px;
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
const Text1 = styled.div`
  color: #5db074;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
