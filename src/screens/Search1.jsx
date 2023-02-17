import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const Search1 = ({}) => {
  
  const navigate = useNavigate();

  
  const ButtonBack = (e, name) => {
    navigate("/Market1");
  };
  const ButtonFilter = (e, name) => {
    navigate("/Filter1");
  };
  const ButtonProfile = (e, name) => {
    navigate("/NotScheduled1");
  };


  
  return (
    <Search>
      <PageHeader>
        <Text3 onClick={(e) => ButtonBack(e, "ButtonPrimary")}>Back</Text3>
        <Text2>Technical Mocks</Text2>
        <Text1 onClick={(e) => ButtonFilter(e, "ButtonPrimary")}>Filter</Text1>
      </PageHeader>
      <BG>
        <Text4>Search</Text4>
      </BG>
      <Text5>Your mocks:</Text5>
      <Group onClick={(e) => ButtonProfile(e, "ButtonPrimary")}>
        <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C4E03AQHrJEjMIVFI8g/profile-displayphoto-shrink_400_400/0/1606251858477?e=1681948800&v=beta&t=CbWztU4z24YLTb_6JwZZ9C52cBaqCHUw96g6JWRdrlE"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Christina Wiza</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group>
      <DividerLine />
      <Group1 onClick={(e) => ButtonProfile(e, "ButtonPrimary")}>
      <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C4E03AQGzdDCxZFDtUA/profile-displayphoto-shrink_400_400/0/1609928845772?e=1681948800&v=beta&t=3gRJgWEtvpNC0xHdScV04dZt7uiBRpgK5NpiZVz4KEo"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Judy Boehm</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group1>
      <DividerLine1 />
      <Group2 onClick={(e) => ButtonProfile(e, "ButtonPrimary")}>
      <ContentBlock><img  width="50px" src="https://media.licdn.com/dms/image/C5603AQFzXyyUuYKUrg/profile-displayphoto-shrink_400_400/0/1642657481130?e=1681948800&v=beta&t=aPyQOWv_NPfGobT3VvxWH-mkrrtXprv__Tb9PbrA0kQ"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Hillard Cormier</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group2>
      <DividerLine2 />
    </Search>
  );
};


const Search = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 13px 269px 13px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 98.28%;
  gap: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 19px 0px;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  margin: 8px 4px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  font-size: 15px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  text-align: right;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 98.28%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/4P4cKpFtoSr2P3N67D6T.svg");
`;
const Text4 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 1px 6px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Group = styled.div`
  width: 98.28%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 16px 0px;
  box-sizing: border-box;
`;
const ContentBlock = styled.div`
  width: 16.08%;
  height: 50px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group4 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 6px 0px;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Header = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text6 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const DividerLine = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 98.28%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 5px 0px;
  box-sizing: border-box;
`;
const ContentBlock1 = styled.div`
  width: 16.08%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 11px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group6 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text8 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const DividerLine1 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 98.28%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 5px 0px;
  box-sizing: border-box;
`;
const ContentBlock2 = styled.div`
  width: 16.08%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 11px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group8 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group9 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const DividerLine2 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 98.28%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 5px 0px;
  box-sizing: border-box;
`;
const ContentBlock3 = styled.div`
  width: 16.08%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 11px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group10 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group11 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const DividerLine3 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
