import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";



export const ProfilePosts1 = ({}) => {

    const navigate = useNavigate();



  const ButtonPrimary2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimaryFunction = (e, name) => {
          navigate("/Calendar");

    

  };
  const ButtonPrimary1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ProfilePosts>
      <FernRectangle>
        <Settings>Edit</Settings>
        <Text1>Profile</Text1>
        <Logout>Messages</Logout>
      </FernRectangle>
      <Ellipse src={`https://file.rendit.io/n/txWL3DGoy3mFJG3pRZNZ.png`} />
      <Paragraph1>
        He'll want to use your yacht, and I don't want this thing smelling like
        fish.
      </Paragraph1>
      <Group1>
        <ButtonPrimary2
          onClick={(e) => ButtonPrimary2Function(e, "ButtonPrimary2")}
        >
          <SignUp>📅</SignUp>
        </ButtonPrimary2>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ClickMe>Do Interviews!</ClickMe>
        </ButtonPrimary>
      </Group1>
      <Text2>Joe Job Seeker</Text2>
      <Text3>A mantra goes here</Text3>
      <BG>
        <Text4>Search</Text4>
        <BG1>
          <Text5>Posts</Text5>
        </BG1>
        <Photos>Resume</Photos>
      </BG>
      <Group2>
        <ContentBlock />
        <Group6>
          <Group7>
            <Header>Past Interviews</Header>
            <Text6>8m ago</Text6>
          </Group7>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group6>
      </Group2>
      <DividerLine />
      <Group3>
        <ContentBlock1 />
        <Header1>Upcoming interview</Header1>
        <ButtonPrimary1
          onClick={(e) => ButtonPrimary1Function(e, "ButtonPrimary1")}
        >
          <ClickMe1>!</ClickMe1>
        </ButtonPrimary1>
        <Text7>8m ago</Text7>
      </Group3>
      <DividerLine1 />
      <Group4>
        <ContentBlock2 />
        <Group8>
          <Group9>
            <Text8>Header</Text8>
            <Text9>8m ago</Text9>
          </Group9>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group8>
      </Group4>
      <DividerLine2 />
      <Group5>
        <ContentBlock3 />
        <Group10>
          <Group11>
            <Text10>Header</Text10>
            <Text11>8m ago</Text11>
          </Group11>
          <Paragraph3>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph3>
        </Group10>
      </Group5>
      <DividerLine3 />
    </ProfilePosts>
  );
};

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
  min-width: 0px;
  height: 158px;
  min-height: 0px;
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
  width: 655%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 10px 0px;
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
  align-self: flex-end;
  margin: 0px 70px 8px 0px;
  font-size: 30px;
  font-weight: 600;
  
  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  position: relative;
  align-self: flex-end;
  margin: 0px 106px 0px 0px;
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
  align-self: flex-end;
  color: #5db074;
  font-size: 16px;
  font-weight: 600;
  
  text-align: center;
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
  width: 100%;
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
  width: 97.11%;
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
  margin: 0px 0px 26px 0px;
  box-sizing: border-box;
`;
const ContentBlock1 = styled.div`
  width: 16.29%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 7px 0px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Header1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 31px 0px;
  font-size: 16px;
  font-weight: 600;
  
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
const Group4 = styled.div`
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
  width: 100%;
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
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: 97.11%;
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
const Group5 = styled.div`
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
  width: 100%;
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
  width: 97.11%;
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
