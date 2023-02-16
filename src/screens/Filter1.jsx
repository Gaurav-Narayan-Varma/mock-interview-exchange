import React from "react";
import styled from "styled-components";

export const Filter1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <BG>
      <Handle />
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <ClickMe>Filter</ClickMe>
      </ButtonPrimary>
      <Group>
        <RadioOptionHere>Ratings</RadioOptionHere>
        <Radio1>
          <Radio2 src={`https://file.rendit.io/n/RQwIq52p8SQ2JET8UAq0.svg`} />
        </Radio1>
      </Group>
      <Divider />
      <Group1>
        <RadioOptionHere1>Most popular</RadioOptionHere1>
        <Radio3 src={`https://file.rendit.io/n/hBEbPRM6j8I5MbSZyjMr.svg`} />
      </Group1>
      <Divider1 />
      <Group2>
        <RadioOptionHere2>Available soonest</RadioOptionHere2>
        <Radio4 src={`https://file.rendit.io/n/hBEbPRM6j8I5MbSZyjMr.svg`} />
      </Group2>
      <Divider2 />
    </BG>
  );
};

const BG = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 26.3px 13px 205px 13px;
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
`;
const Handle = styled.div`
  width: 31.9px;
  height: 6.58px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 158px 16.1px 0px;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: #e7e7e7;
`;
const ButtonPrimary = styled.button`
  width: 93.68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  margin: 0px 10.9px 24px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 143px;
  padding-bottom: 16px;
  padding-left: 143px;
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
const Group = styled.div`
  width: 98.56%;
  gap: 269px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const RadioOptionHere = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Radio1 = styled.div`
  width: -8.21%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 1px 0px 2px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/WG4vNw0BGuyq6mQtbY5a.svg");
`;
const Radio2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Divider = styled.div`
  width: 98.56%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 98.56%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  box-sizing: border-box;
`;
const RadioOptionHere1 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Radio3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 3px 0px;
  box-sizing: border-box;
`;
const Divider1 = styled.div`
  width: 98.56%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 98.56%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const RadioOptionHere2 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Radio4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 1px 0px 2px 0px;
  box-sizing: border-box;
`;
const Divider2 = styled.div`
  width: 98.56%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
