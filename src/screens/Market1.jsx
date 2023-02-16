import React from "react";
import styled from "styled-components";

export const Market1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const LogInFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Market>
      <PageHeader>
        <Back>My Profile (1)</Back>
        <Text6>Market</Text6>
        <Text7>Filter</Text7>
      </PageHeader>
      <BG>
        <Text5>Search</Text5>
      </BG>
      <Text4>Your mocks</Text4>
      <Group>
        <WhiteSquare8 />
        <WhiteSquare7 />
        <WhiteSquare6 />
      </Group>
      <Group1>
        <Group7>
          <ItemNameGoesHere>Victoria Harris Feb 28 4:00PM</ItemNameGoesHere>
          <Group8>
            <ButtonPrimary
              onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
            />
            <LogIn onClick={(e) => LogInFunction(e, "LogIn")} />
            <Starting>Starting </Starting>
          </Group8>
        </Group7>
        <ItemNameGoesHere1>
          send szoom meeting!!!!!
          <br />
        </ItemNameGoesHere1>
        <ItemNameGoesHere2>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere2>
      </Group1>
      <Group2>
        <Text3>Technical Mock</Text3>
        <Text2>Technical Mock</Text2>
      </Group2>
      <Group3>
        <WhiteSquare5 />
        <WhiteSquare4 />
        <WhiteSquare3 />
      </Group3>
      <Group4>
        <ItemNameGoesHere3>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere3>
        <ItemNameGoesHere4>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere4>
        <ItemNameGoesHere5>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere5>
      </Group4>
      <Text1>Behavioral Mock</Text1>
      <Group5>
        <WhiteSquare2 />
        <WhiteSquare1 />
        <WhiteSquare />
      </Group5>
      <Group6>
        <ItemNameGoesHere6>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere6>
        <ItemNameGoesHere7>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere7>
        <ItemNameGoesHere8>
          Item #1 Name
          <br />
          Goes Here
        </ItemNameGoesHere8>
      </Group6>
    </Market>
  );
};

const Market = styled.div`
  gap: 2.22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 2px 42.1px 2px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 92.45%;
  gap: 21px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 26.8px 0px;
  box-sizing: border-box;
`;
const Back = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text6 = styled.div`
  align-self: flex-start;
  margin: 0px 59px 0px 0px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 92.45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 11px 4.78px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/s7NVJlOCXhuV90V80ZRo.svg");
`;
const Text5 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2.78px 9px;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5.78px 5px;
  box-sizing: border-box;
`;
const WhiteSquare8 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  margin: 0px 3px 0px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare7 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare6 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group1 = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 8.78px 5px;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: 34.38%;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 3px 0px 0px;
  box-sizing: border-box;
`;
const ItemNameGoesHere = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group8 = styled.div`
  width: 89.09%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 16px 49px 0px 49px;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 98px;
  height: 24px;
  left: 0px;
  top: 0px;
  position: absolute;
  padding: 0px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #bf3030;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const LogIn = styled.button`
  position: relative;
  align-self: center;
  padding: 0px;
  text-align: center;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
`;
const Starting = styled.div`
  width: 55px;
  height: 17px;
  left: 22px;
  top: 3px;
  position: absolute;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const ItemNameGoesHere1 = styled.div`
  width: 34.38%;
  align-self: flex-start;
  margin: 0px 0px 19px 0px;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ItemNameGoesHere2 = styled.div`
  width: 34.38%;
  align-self: flex-start;
  margin: 0px 0px 36px 0px;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 9px;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  width: 179px;
  height: 29px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  position: relative;
  align-self: flex-start;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 5.78px 0px;
  box-sizing: border-box;
`;
const WhiteSquare5 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare4 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare3 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group4 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 16.6px 0px;
  box-sizing: border-box;
`;
const ItemNameGoesHere3 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ItemNameGoesHere4 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ItemNameGoesHere5 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 7.7px 9px;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 5.78px 0px;
  box-sizing: border-box;
`;
const WhiteSquare2 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare1 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const WhiteSquare = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group6 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  box-sizing: border-box;
`;
const ItemNameGoesHere6 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ItemNameGoesHere7 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ItemNameGoesHere8 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
