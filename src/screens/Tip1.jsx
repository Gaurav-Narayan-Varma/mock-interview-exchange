import React from "react";
import styled from "styled-components";

export const Tip1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Tip>
      <BG>
        <Image1 src={`https://file.rendit.io/n/xGwztyhLJPVrPRWApxO3.png`} />
        <Text1>Tip!</Text1>
        <BG1>
          <Search>Enter in amount</Search>
        </BG1>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Done</ClickMe>
        </ButtonPrimary>
      </BG>
    </Tip>
  );
};

const Tip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 205px 15px 164px 15px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const BG = styled.div`
  width: 99.42%;
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px 16px 19px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/3LnYD2rOr2KOc25JNZgE.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 0px 0px 7px 100px;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  margin: 0px 0px 0px 127px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: 88.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 141px 17px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/GNa0xsGdY5Sgk5poryg5.svg");
`;
const Search = styled.div`
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: auto;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
