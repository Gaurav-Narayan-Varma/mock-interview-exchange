import React from "react";
import styled from "styled-components";

const  Calendar1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <Calendar>
      <Group>
        <Element1 src={`https://file.rendit.io/n/iLbBC4OK0KIhZ005w78E.svg`} />
        <Group5>
          <MobileSignal
            src={`https://file.rendit.io/n/9GU9LbsiVpZkDm1I3YYN.svg`}
          />
        </Group5>
        <Wifi src={`https://file.rendit.io/n/1VTmxTxWsMk81E68s4hu.svg`} />
        <Element2>
          <Image1 src={`https://file.rendit.io/n/VbzDfJs3yw2S37X1hpBX.svg`} />
        </Element2>
        <CombinedShape
          src={`https://file.rendit.io/n/xZtdQqCa5uXeR2NuRAjI.svg`}
        />
      </Group>
      <Background>
        <Text42>Mo</Text42>
        <Text42>Tu</Text42>
        <Group6>
          <Text49>March</Text49>
          <Group7>
            <Text44>We</Text44>
            <Text44>Th</Text44>
          </Group7>
        </Group6>
        <Text42>Fr</Text42>
        <Text42>Sa</Text42>
        <Text48>Su</Text48>
      </Background>
      <CalendarRow>
        <Text41>29</Text41>
        <Text41>30</Text41>
        <Text41>31</Text41>
        <Text38>1</Text38>
        <Text38>2</Text38>
        <Text38>3</Text38>
        <Text38>4</Text38>
      </CalendarRow>
      <CalendarRow1>
        <Text34>5</Text34>
        <Text33>6</Text33>
        <Text32>7</Text32>
        <Text31>8</Text31>
        <Text30>9</Text30>
        <Text38>10</Text38>
        <Text38>11</Text38>
      </CalendarRow1>
      <Group1>
        <Text27>12</Text27>
        <Text26>13</Text26>
        <Text25>14</Text25>
        <Text24>15</Text24>
        <Group8>
          <Text23>16</Text23>
          <MobileSignal
            src={`https://file.rendit.io/n/dzJTTxNy1yvGgHvvAK4v.svg`}
          />
        </Group8>
        <Text22>17</Text22>
        <Text24>18</Text24>
      </Group1>
      <CalendarRow2>
        <Text20>19</Text20>
        <Text20>20</Text20>
        <Text31>21</Text31>
        <Text38>22</Text38>
        <Text16>23</Text16>
        <Text30>24</Text30>
        <Text38>25</Text38>
      </CalendarRow2>
      <CalendarRow3>
        <Text20>26</Text20>
        <Text12>27</Text12>
        <Text11>28</Text11>
        <Text38>29</Text38>
        <Text30>30</Text30>
        <Text8>31</Text8>
        <Text41>1</Text41>
      </CalendarRow3>
      <Group2>
        <Icon src={`https://file.rendit.io/n/NKp6gnIvM6dSq6urpybn.svg`} />
        <Text6>Item</Text6>
        <Text5>30min.</Text5>
      </Group2>
      <Divider />
      <Group2>
        <Icon src={`https://file.rendit.io/n/NKp6gnIvM6dSq6urpybn.svg`} />
        <Text6>Item</Text6>
        <Text5>60min.</Text5>
      </Group2>
      <Divider />
      <Group2>
        <Icon src={`https://file.rendit.io/n/NKp6gnIvM6dSq6urpybn.svg`} />
        <Text6>Item</Text6>
        <Text5>30min.</Text5>
      </Group2>
      <Divider2 />
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <ILoveIt>Ready to learn!</ILoveIt>
      </ButtonPrimary>
    </Calendar>
  );
};

export default Calendar1;


const MobileSignal = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const Text42 = styled.div`
  margin: 112px 34px 0px 0px;
  color: #ffffff;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text44 = styled.div`
  color: #ffffff;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text41 = styled.div`
  color: #bdbdbd;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text38 = styled.div`
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text31 = styled.div`
  margin: 0px 5px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text30 = styled.div`
  margin: 0px 2px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text24 = styled.div`
  margin: 9px 0px 8px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text20 = styled.div`
  margin: 0px 11px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 91.47%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
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
  margin: 0px 215px 0px 0px;
  font-size: 16px;
  font-weight: 500;
 
  box-sizing: border-box;
`;
const Text5 = styled.div`
  margin: 0px 0px 2px 0px;
  font-size: 14px;
 
  text-align: right;
  box-sizing: border-box;
`;
const Divider = styled.div`
  width: 91.47%;
  height: 1px;
  flex-shrink: 0;
  margin: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Calendar = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 101px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Group = styled.div`
  width: 87.2%;
  gap: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-end;
  margin: -2px 14.7px 0.33px 0px;
  box-sizing: border-box;
`;
const Element1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 19.2px 15.1px 0.41px 0px;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 72.28%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  align-items: flex-end;
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
const Wifi = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 19.3px 4.03px 0.37px 0px;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 6.83%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 19.3px 0px 0px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/q11fK1aCkH3HBAnEwZkf.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  box-sizing: border-box;
`;
const CombinedShape = styled.img`
  min-width: 0px;
  min-height: 0px;
  margin: 23px 0px 3.67px 0px;
  box-sizing: border-box;
`;
const Background = styled.div`
  width: 100%;
  gap: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-end;
  margin: 0px 0px 17px 0px;
  padding: 16px 17px 16px 16px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const Group6 = styled.div`
  width: 33.03%;
  gap: 76px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  box-sizing: border-box;
`;
const Text49 = styled.div`
  align-self: flex-end;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
 
  text-align: center;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;
const Text48 = styled.div`
  margin: 112px 0px 0px 0px;
  color: #ffffff;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow = styled.div`
  width: 90.13%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 0px 25px 16px;
  box-sizing: border-box;
`;
const CalendarRow1 = styled.div`
  width: 89.33%;
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  margin: 0px 19px 16px 0px;
  box-sizing: border-box;
`;
const Text34 = styled.div`
  margin: 0px 15px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text33 = styled.div`
  margin: 0px 14px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text32 = styled.div`
  margin: 0px 8px 0px 0px;
  color: #5db074;
  font-size: 14px;
  font-weight: 600;
 
  text-align: center;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 90.4%;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Text27 = styled.div`
  margin: 9px 20px 8px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text26 = styled.div`
  margin: 9px 19px 8px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text25 = styled.div`
  margin: 9px 13px 8px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Group8 = styled.div`
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
 
  text-align: center;
  box-sizing: border-box;
`;
const Text22 = styled.div`
  margin: 9px 11px 8px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const CalendarRow2 = styled.div`
  width: 90.93%;
  gap: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Text16 = styled.div`
  margin: 0px 1px 0px 0px;
  font-size: 14px;
 
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
  align-items: flex-start;
  margin: 0px 0px 17px 16px;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  margin: 0px 9px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  margin: 0px 3px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  margin: 0px 8px 0px 0px;
  font-size: 14px;
 
  text-align: center;
  box-sizing: border-box;
`;
const Divider2 = styled.div`
  width: 91.47%;
  height: 1px;
  flex-shrink: 0;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
 
  text-align: center;
  box-sizing: border-box;
`;
