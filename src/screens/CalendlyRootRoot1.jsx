import React from "react";
import styled from "styled-components";

export const CalendlyRootRoot1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <CalendlyRootRoot>
      <BG>
        <Text1>Enter time you scheduled </Text1>
        <BG1>
          <Search>MM/DD/YYYY</Search>
        </BG1>
        <Image1 src={`https://file.rendit.io/n/pjV0YRSPNnAtWkoZM5lK.png`} />
        <BG2>
          <Search1>Time Zone drop down</Search1>
        </BG2>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Done</ClickMe>
        </ButtonPrimary>
      </BG>
    </CalendlyRootRoot>
  );
};

const CalendlyRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 205px 15px 244px 15px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: 99.42%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 17px 16px 24px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/M6oepvSGuTnROKOnjNap.svg");
`;
const Text1 = styled.div`
  width: 81.67%;
  align-self: flex-start;
  margin: 0px 0px 23px 28px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: 88.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 6px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/gG3fzy4uzapX9lWSmdZU.svg");
`;
const Search = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 0px 11px 0px 0px;
  box-sizing: border-box;
`;
const BG2 = styled.div`
  width: 88.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5px 17px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/gG3fzy4uzapX9lWSmdZU.svg");
`;
const Search1 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
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
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
