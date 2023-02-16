import React from "react";
import styled from "styled-components";


import { useNavigate } from "react-router-dom";







export default function Calendly1  ({})  {
  const navigate = useNavigate();

  const ButtonPrimaryFunction = (e, name) => {
     navigate("/InterviewConfirmed");

  };

  
  return (
    <Calendly>
      <Group>
        <Element1 src={`https://file.rendit.io/n/RZcUyKOAQZzFS9w3o8MD.svg`} />
        <Group1>
          <MobileSignal
            src={`https://file.rendit.io/n/MBfa08GdJA86HsHZZho9.svg`}
          />
        </Group1>
        <Wifi src={`https://file.rendit.io/n/hAVjmuwJyzQHXTsmIzT9.svg`} />
        <Element2>
          <Image1 src={`https://file.rendit.io/n/wZ2e9pVdXqWjAXHcAATO.svg`} />
        </Element2>
        <CombinedShape
          src={`https://file.rendit.io/n/jcoFK9vV2VOa8KqPkQP7.svg`}
        />
      </Group>
      <BG>
        <Text1>Do Interviews!</Text1>
        <BG1>
          <Search>Enter in your Calendly</Search>
        </BG1>
        <BG2>
          <Search1>Enter in your Google Meets</Search1>
        </BG2>
        <Group2>
          <RadioOptionHere>Technical</RadioOptionHere>
          <Radio1>
            <Radio2 src={`https://file.rendit.io/n/Sox1QZhC6Xy00x5QZq02.svg`} />
          </Radio1>
        </Group2>
        <Divider />
        <Group3>
          <RadioOptionHere1>Behavioral</RadioOptionHere1>
          <Radio3 src={`https://file.rendit.io/n/d2fLDqmGctyf0YpIXCoi.svg`} />
        </Group3>
        <Divider1 />
        <Group4>
          <RadioOptionHere2>Both</RadioOptionHere2>
          <Radio4 src={`https://file.rendit.io/n/d2fLDqmGctyf0YpIXCoi.svg`} />
        </Group4>
        <Divider2 />
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Done</ClickMe>
        </ButtonPrimary>
      </BG>
    </Calendly>
  );
};

const Calendly = styled.div`
  gap: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 14.7px 164px 14.7px;
  box-sizing: border-box;
  background-color: #5db074;
  overflow: hidden;
`;
const Group = styled.div`
  width: 94.6%;
  gap: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: -2px 0px 0px 0px;
  box-sizing: border-box;
`;
const Element1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 19.2px 15.1px 0.41px 0px;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 72.29%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0px 4.03px 0.33px 0px;
  padding: 19.7px 0px 0px 0px;
  box-sizing: border-box;
`;
const Notch = styled.img`
  width: 219px;
  min-width: 0px;
  height: 30px;
  min-height: 0px;
  left: 0px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const MobileSignal = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-end;
  box-sizing: border-box;
`;
const Wifi = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 19.3px 4.03px 0.37px 0px;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 6.83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 19.3px 0px 0px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/iwsDB4mjcdn2U6f5LtIy.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const CombinedShape = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 23px 0px 3.67px 0px;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 99.23%;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0.33px 0px 0px;
  padding: 17px 16px 19px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/kDWckuXgTc9kQsjuXhz6.svg");
`;
const Text1 = styled.div`
  align-self: center;
  margin: 0px 0px 11px 0px;
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
  align-self: center;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/MNyVMWyhq8C8ySFv3KX3.svg");
`;
const Search = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const BG2 = styled.div`
  width: 88.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 10px 17px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/MNyVMWyhq8C8ySFv3KX3.svg");
`;
const Search1 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 99.68%;
  gap: 221px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 9px 0px;
  box-sizing: border-box;
`;
const RadioOptionHere = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const Radio1 = styled.div`
  width: -12.12%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 1px 0px 2px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/bNNDoqrLmEjHQiCbdtLX.svg");
`;
const Radio2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Divider = styled.div`
  width: 99.68%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 10px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 99.68%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 8px 0px;
  box-sizing: border-box;
`;
const RadioOptionHere1 = styled.div`
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const Radio3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  box-sizing: border-box;
`;
const Divider1 = styled.div`
  width: 99.68%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 12px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 99.68%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 8px 0px;
  box-sizing: border-box;
`;
const RadioOptionHere2 = styled.div`
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const Radio4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 0px 0px 4px 0px;
  box-sizing: border-box;
`;
const Divider2 = styled.div`
  width: 99.68%;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 45px 0px;
  border-style: solid;
  border-color: #e7e7e7;
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
 
  text-align: center;
  box-sizing: border-box;
`;
