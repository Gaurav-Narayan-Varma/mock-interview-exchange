import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";


export const ProfilePosts1 = ({}) => {
    const navigate = useNavigate();

  const ButtonPrimary2Function = (e, name) => {
    navigate("/Calendar1");
  };
  const ButtonPrimaryFunction = (e, name) => {
    navigate("/Calendly1");

  };  
  const ButtonWantsYou = (e, name) => {
    navigate("/CalendarDrawer1");
  }
  const ButtonProfile2 = (e, name) => {
    navigate("/market1");
  }
  return (
    <ProfilePosts>

      <FernRectangle>
        <Back onClick={(e) => ButtonProfile2(e, "ButtonPrimary")} >Market</Back>

      </FernRectangle>
      <Ellipse src={`https://media.licdn.com/dms/image/C4E03AQHkt6jZ5A6fWQ/profile-displayphoto-shrink_400_400/0/1604676461434?e=1681948800&v=beta&t=TRFG_U2cT2VjM3ChHt3r7hNfG_OKk3aR07OYi4uuEUo`} />
      <Group1>
          <SignUp onClick={(e) => ButtonPrimary2Function(e, "ButtonPrimary2")}>📅</SignUp>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Do Interviews!</ClickMe>
        </ButtonPrimary>
      </Group1>
      <Text2>Peter Pierre</Text2>

      <Text3>Ex-IBM, 10+ YouTube</Text3>
      <Text5>Your mocks:</Text5>

      <Group onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
        <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C4D03AQFjCosFi0uoOA/profile-displayphoto-shrink_400_400/0/1618882572479?e=1681948800&v=beta&t=s7Y6k96xzkX1KSJpxgva0uzjnQB3T3b97ACQnsZP9gk"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Edgardo Adam</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group>
      <DividerLine />
      <Group onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
      <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C4E03AQFbBv4KvvZLyQ/profile-displayphoto-shrink_400_400/0/1517740860047?e=1681948800&v=beta&t=7B3kfLl7L3DEGZsspk4rHzgAvwMt813GIH_jNPN1dQE"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Ruth Goyette</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group>
      <DividerLine1 />
      <Group2 onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
      <ContentBlock><img  width="50px" src="https://media.licdn.com/dms/image/D4D03AQGHVfas_1Gl1A/profile-displayphoto-shrink_400_400/0/1665579676179?e=1681948800&v=beta&t=sWVJsQp4PFTrWyWp1ajqBYwh6OilDzNwvEsMJnxCtYM"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Lorna Fahey</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>zoom.us/j/5137704736?pwd=Y0Y5REZoaWk5bllDSk1NYUxWcUlTdz09</Text9>
        </Group4>
      </Group2>
      <DividerLine2 />
    </ProfilePosts>
  );
};

const Back = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #ffffff;
  font-size: 16px;
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
const ProfilePosts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 210px 4px 39px 4px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const FernRectangle = styled.div`
  width: 376px;
  height: 245px;
  left: -1px;
  top: -51px;
  position: absolute;
  gap: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 73px 16px 73px 17px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const Settings = styled.div`
  align-self: flex-start;
  margin: 8px 51px 72px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 63px 0px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  
  text-align: center;
  box-sizing: border-box;
`;
const Logout = styled.div`
  align-self: flex-start;
  margin: 8px 0px 72px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  
  text-align: right;
  box-sizing: border-box;
`;
const Ellipse = styled.img`
  width: 158px;
  height: 158px;
  border-radius: 50%;
  object-fit: cover;
  left: 108px;
  top: 90px;
  position: absolute;
  box-sizing: border-box;

`;
const Paragraph1 = styled.div`
  width: 269px;
  height: 34px;
  left: 82px;
  top: 537px;
  position: absolute;
  font-size: 14px;
  
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 96.46%;
  position: relative;
  gap: 167px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 21px 0px;
  box-sizing: border-box;
`;
const ButtonPrimary2 = styled.button`
  width: 280%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 0px;
  padding-top: 16px;
  padding-right: 12px;
  padding-bottom: 9px;
  padding-left: 12px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const SignUp = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 32px;
  
  text-align: center;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 10px -100px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 9.5px;
  padding-bottom: 12px;
  padding-left: 9.5px;
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
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  
  text-align: center;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  position: relative;
  margin: 0 auto 8px; /* Center the element horizontally */
  width: fit-content; /* Set the width to the size of the content */
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
`;

const Text3 = styled.div`
  position: relative;
  margin: 0 auto 30px; /* Center the element horizontally */
  width: fit-content; /* Set the width to the size of the content */
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
`;

const BG = styled.div`
  width: 93.46%;
  position: relative;
  gap: 50.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 16px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/GjIYWL8lycTjxokPedsO.svg");
`;
const Text4 = styled.div`
  width: 54px;
  height: 19px;
  left: 61px;
  top: 16px;
  position: absolute;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  
  text-align: center;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: 72.06%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 14px 63.5px 13px 63.5px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/dSZ0SJ9IcfXIGozjWWSf.svg");
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 1px 6px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Photos = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 14px 0px 13px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  
  text-align: center;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 93.46%;
  position: relative;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 15px 0px;
  box-sizing: border-box;
`;
const ContentBlock = styled.div`
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
const Paragraph = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;
  
  box-sizing: border-box;
`;
const DividerLine = styled.div`
  width: 277px;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 12px 16px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 93.46%;
  position: relative;
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 30px 0px 0px 0px;
  box-sizing: border-box;
`;
const ContentBlock1 = styled.div`
  width: 35px;
  height: 35px;
  align-self: flex-start;
  margin: 0px 7px 0px 0px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Header1 = styled.div`
  align-self: flex-start;
  margin: 20px 0px 31px 0px;
  font-size: 16px;
  font-weight: 600;
  padding-left:15px;

  
  box-sizing: border-box;
`;
const ButtonPrimary1 = styled.button`
  width: 5.86%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0px 35px 13px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 6.5px;
  padding-bottom: 2px;
  padding-left: 6.5px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ClickMe1 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  
  text-align: center;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  margin: 2px 0px 31px 0px;
  color: #bdbdbd;
  font-size: 14px;
  
  text-align: right;
  box-sizing: border-box;
`;
const DividerLine1 = styled.div`
  width: 277px;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 12px 16px 0px;
  border-style: solid;
  border-color: #e7e7e7;
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
const Text8 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;
  
  box-sizing: border-box;
`;
const DividerLine2 = styled.div`
  width: 277px;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 12px 16px 0px;
  border-style: solid;
  border-color: #e7e7e7;
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
const Paragraph3 = styled.div`
  width: auto;
  align-self: flex-start;
  font-size: 14px;
  
  box-sizing: border-box;
`;
const DividerLine3 = styled.div`
  width: 277px;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 12px 0px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
