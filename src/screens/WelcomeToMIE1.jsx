import React from "react";
import styled from "styled-components";

export const WelcomeToMIE1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <WelcomeToMIE>
      <BG>
        <Text2>Welcome to Mock IE</Text2>
        <Text3>Starting doing interview today!</Text3>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Signup</ClickMe>
        </ButtonPrimary>
        <Text1>Login</Text1>
      </BG>
    </WelcomeToMIE>
  );
};

const WelcomeToMIE = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 224px 16px 225px 16px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: 100%;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  margin: 0px 0px 124px 0px;
  color: #666666;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 100%;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  color: #5db074;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
