import React from "react";
import styled from "styled-components";

export const Calendar1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Calendar>
      <Background>
        <Text42>Mo</Text42>
        <Text43>Tu</Text43>
        <Group4>
          <Text49>March</Text49>
          <Group5>
            <Text44>We</Text44>
            <Text45>Th</Text45>
          </Group5>
        </Group4>
        <Text46>Fr</Text46>
        <Text47>Sa</Text47>
        <Text48>Su</Text48>
      </Background>
      <CalendarRow>
        <Text41>29</Text41>
        <Text40>30</Text40>
        <Text39>31</Text39>
        <Text38>1</Text38>
        <Text37>2</Text37>
        <Text36>3</Text36>
        <Text35>4</Text35>
      </CalendarRow>
      <CalendarRow1>
        <Text34>5</Text34>
        <Text33>6</Text33>
        <Text32>7</Text32>
        <Text31>8</Text31>
        <Text30>9</Text30>
        <Text29>10</Text29>
        <Text28>11</Text28>
      </CalendarRow1>
      <Group>
        <Text27>12</Text27>
        <Text26>13</Text26>
        <Text25>14</Text25>
        <Text24>15</Text24>
        <Group6>
          <Text23>16</Text23>
          <Ellipse src={`https://file.rendit.io/n/eaxIFvcO9uDvRAm5vrXH.svg`} />
        </Group6>
        <Text22>17</Text22>
        <Text21>18</Text21>
      </Group>
      <CalendarRow2>
        <Text20>19</Text20>
        <Text19>20</Text19>
        <Text18>21</Text18>
        <Text17>22</Text17>
        <Text16>23</Text16>
        <Text15>24</Text15>
        <Text14>25</Text14>
      </CalendarRow2>
      <CalendarRow3>
        <Text13>26</Text13>
        <Text12>27</Text12>
        <Text11>28</Text11>
        <Text10>29</Text10>
        <Text9>30</Text9>
        <Text8>31</Text8>
        <Text7>1</Text7>
      </CalendarRow3>
      <Group1>
        <Icon src={`https://file.rendit.io/n/p5e0r95fUcwXoKfknyfc.svg`} />
        <Text6>Item</Text6>
        <Text5>30min.</Text5>
      </Group1>
      <Divider />
      <Group2>
        <Icon1 src={`https://file.rendit.io/n/p5e0r95fUcwXoKfknyfc.svg`} />
        <Text4>Item</Text4>
        <Text3>60min.</Text3>
      </Group2>
      <Divider1 />
      <Group3>
        <Icon2 src={`https://file.rendit.io/n/p5e0r95fUcwXoKfknyfc.svg`} />
        <Text2>Item</Text2>
        <Text1>30min.</Text1>
      </Group3>
      <Divider2 />
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <ILoveIt>Ready to learn!</ILoveIt>
      </ButtonPrimary>
    </Calendar>
  );
};

const Calendar = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 0px 145px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Background = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 17px 0px;
  padding: 16px 17px 16px 16px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const Text42 = styled.div`
  align-self: flex-end;
  margin: 112px 34px 0px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text43 = styled.div`
  align-self: flex-end;
  margin: 112px 34px 0px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 33.03%;
  gap: 76px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const Text49 = styled.div`
  align-self: flex-end;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text44 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text45 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text46 = styled.div`
  align-self: flex-end;
  margin: 112px 34px 0px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text47 = styled.div`
  align-self: flex-end;
  margin: 112px 34px 0px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text48 = styled.div`
  align-self: flex-end;
  margin: 112px 0px 0px 0px;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow = styled.div`
  width: 90.13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 25px 16px;
  box-sizing: border-box;
`;
const Text41 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text40 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text39 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text38 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text37 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text36 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text35 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow1 = styled.div`
  width: 89.33%;
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 19px 16px 0px;
  box-sizing: border-box;
`;
const Text34 = styled.div`
  align-self: flex-start;
  margin: 0px 15px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text33 = styled.div`
  align-self: flex-start;
  margin: 0px 14px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text32 = styled.div`
  align-self: flex-start;
  margin: 0px 8px 0px 0px;
  color: #5db074;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text31 = styled.div`
  align-self: flex-start;
  margin: 0px 5px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text30 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text29 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text28 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 90.4%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Text27 = styled.div`
  align-self: flex-end;
  margin: 9px 20px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text26 = styled.div`
  align-self: flex-end;
  margin: 9px 19px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text25 = styled.div`
  align-self: flex-end;
  margin: 9px 13px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text24 = styled.div`
  align-self: flex-end;
  margin: 9px 0px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group6 = styled.div`
  width: 21.64%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  box-sizing: border-box;
`;
const Text23 = styled.div`
  width: 16px;
  height: 17px;
  left: 10px;
  top: 9px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Ellipse = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text22 = styled.div`
  align-self: flex-end;
  margin: 9px 11px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text21 = styled.div`
  align-self: flex-end;
  margin: 9px 0px 8px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow2 = styled.div`
  width: 90.93%;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Text20 = styled.div`
  align-self: flex-start;
  margin: 0px 11px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text19 = styled.div`
  align-self: flex-start;
  margin: 0px 11px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text18 = styled.div`
  align-self: flex-start;
  margin: 0px 5px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text17 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text16 = styled.div`
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text15 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text14 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow3 = styled.div`
  width: 89.87%;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 17px 16px;
  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-start;
  margin: 0px 11px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  align-self: flex-start;
  margin: 0px 9px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-start;
  margin: 0px 3px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  align-self: flex-start;
  margin: 0px 8px 0px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 91.47%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const Icon = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 2px 0px 1px 0px;
  box-sizing: border-box;
`;
const Text6 = styled.div`
  align-self: flex-start;
  margin: 0px 215px 0px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Divider = styled.div`
  width: 91.47%;
  height: 1px;
  flex-shrink: 0;
  align-self: center;
  margin: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 91.47%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const Icon1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 2px 0px 1px 0px;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 0px 215px 0px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Divider1 = styled.div`
  width: 91.47%;
  height: 1px;
  flex-shrink: 0;
  align-self: center;
  margin: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 91.47%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  box-sizing: border-box;
`;
const Icon2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-end;
  margin: 2px 0px 1px 0px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 0px 215px 0px 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2px 0px;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Divider2 = styled.div`
  width: 91.47%;
  height: 1px;
  flex-shrink: 0;
  align-self: center;
  margin: 0px 0px 2px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 82.93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin: 0px 0px 0px 25px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 97.5px;
  padding-bottom: 16px;
  padding-left: 97.5px;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
