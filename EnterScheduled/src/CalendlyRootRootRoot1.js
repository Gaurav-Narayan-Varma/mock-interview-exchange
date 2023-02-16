import React from "react";
import styled from "styled-components";

export const CalendlyRootRootRoot1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <CalendlyRootRootRoot>
      <BG>
        <Text1>Enter time you scheduled </Text1>
        <FlexColumn>
          <BG1>
            <Search>MM/DD/YYYY</Search>
          </BG1>
          <Image1 />
          <BG2>
            <Search1>Time Zone drop down</Search1>
          </BG2>
          <ButtonPrimary
            onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
          >
            <ClickMe>Done</ClickMe>
          </ButtonPrimary>
        </FlexColumn>
      </BG>
    </CalendlyRootRootRoot>
  );
};

const CalendlyRootRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 205px 15px 244px 17px;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: 311px;
  gap: 31px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 17px 16px 24px 16px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Zf6GvMcBYWmJhY6JjsJ7.svg");
`;
const Text1 = styled.div`
  width: 254px;
  height: 67px;
  margin: 0px 0px 0px 28px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
`;
const FlexColumn = styled.div`
  width: 311px;
  height: 224px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const BG1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 6px 0px;
  padding: 16px 152px 15px 16px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/ohJKpnAGlwvALEyc5zMi.svg");
`;
const Search = styled.div`
  width: 107px;
  height: 19px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  white-space: nowrap;
`;
const Image1 = styled.div`
  width: 281px;
  height: 53px;
  align-self: flex-end;
  margin: 0px 11px 0px 0px;
  background-size: cover;
  background-position: 50% 50%;
  background-blend-mode: normal;
  background-image: url(https://file.rendit.io/n/co9krAdvpW6CNNv0quwQ.png);
`;
const BG2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5px 17px;
  padding: 16px 92px 15px 16px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/ohJKpnAGlwvALEyc5zMi.svg");
`;
const Search1 = styled.div`
  width: 167px;
  height: 19px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  white-space: nowrap;
`;
const ButtonPrimary = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  padding: 0px;
  padding-top: 16px;
  padding-right: 135px;
  padding-bottom: 16px;
  padding-left: 135px;
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
  width: 41px;
  height: 19px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  white-space: nowrap;
`;
