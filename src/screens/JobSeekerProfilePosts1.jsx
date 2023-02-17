import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const JobSeekerProfilePosts1 = ({}) => {
  
  const navigate = useNavigate();
  const ButtonPrimary2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimaryFunction = (e, name) => {
  };
  const ButtonPrimaryFunction2 = (e, name) => {
    navigate("/NotScheduled1");
  };
  return (
    <ProfilePosts>
      <Group>
        <FernRectangle>
        </FernRectangle>
        <ButtonPrimary2
          onClick={(e) => ButtonPrimary2Function(e, "ButtonPrimary2")}
        >
          {/* <SignUp>📅</SignUp> */}
        </ButtonPrimary2>
        <Group5>
          <Ellipse src={`https://media.licdn.com/dms/image/C4E03AQHrJEjMIVFI8g/profile-displayphoto-shrink_400_400/0/1606251858477?e=1681948800&v=beta&t=CbWztU4z24YLTb_6JwZZ9C52cBaqCHUw96g6JWRdrlE`} />
          <ButtonPrimary
            onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
          >
            <ClickMe onClick={(e) => ButtonPrimaryFunction2(e, "ButtonPrimary")}>Sign Up!</ClickMe>
          </ButtonPrimary>
        </Group5>
      </Group>
      <Text2>Christina Wiza</Text2>
      <Text3>Ex-Googe, Ex-Youtube, 10+ YOE</Text3>

      <Text5>Christina's reviews:</Text5>

      <Group onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
        <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C5603AQF6SmOG0XaL3A/profile-displayphoto-shrink_400_400/0/1586274762879?e=1681948800&v=beta&t=r2SBcXwyRRWRQOkzN3PEDOfl1M8wl3Yupnic6RbZlN0"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Timothy Yallon</Header>
            <Text6>March 3, 6:00PM</Text6>
          </Group5>
          <Text9>Christina demonstrated exceptional problem-solving skills during the code interview, which greatly impressed me.</Text9>
        </Group4>
      </Group>
      <DividerLine />
      <Group onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
      <ContentBlock><img width="50px" src="https://media.licdn.com/dms/image/C5603AQEQEgjCrAlbCQ/profile-displayphoto-shrink_400_400/0/1527716315807?e=1681948800&v=beta&t=Ed8Ow0yjo0tlWGIqZarvgTfZIIpldQSxVtumT7y2IdY"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Ruby Dawson</Header>
            <Text6>March 13, 7:30PM</Text6>
          </Group5>
          <Text9>I was thoroughly impressed with Christina's ability to explain her thought process clearly and concisely while tackling challenging coding problems.</Text9>
        </Group4>
      </Group>
      <DividerLine1 />
      <Group2 onClick={(e) => ButtonWantsYou(e, "ButtonPrimary2")}>
      <ContentBlock><img  width="50px" src="https://media.licdn.com/dms/image/C5603AQGqli9RlGlC-A/profile-displayphoto-shrink_400_400/0/1603860526747?e=1681948800&v=beta&t=Fh50TqT2viAryZkh3vfr5BKQlYG28RqYLyW5qP7emYI"></img></ContentBlock>
        <Group4>
          <Group5>
            <Header>Melly Ma</Header>
            <Text6>March 20, 2:00PM</Text6>
          </Group5>
          <Text9>Christina's technical proficiency and calm demeanor during the code interview made the overall experience enjoyable and engaging.</Text9>
        </Group4>
      </Group2>
      <DividerLine2 />
    </ProfilePosts>
  );
};

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
  background-color: #ffffff;
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
