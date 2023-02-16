import React from "react";
import styled from "styled-components";

export const ProfilePostsRootRoot1 = ({}) => {
  return (
    <ProfilePostsRootRoot>
      <Group>
        <FernRectangle>
          <Settings>Save</Settings>
          <Profile>Edit Mode</Profile>
          <Logout>Message</Logout>
        </FernRectangle>
        <Ellipse src={`https://file.rendit.io/n/u3Ltoz9HOClxsshgJVNA.png`} />
      </Group>
      <Text11>Joe Job Seeker</Text11>
      <Text10>A mantra goes here</Text10>
      <BG>
        <Group5>
          <Text8>Search</Text8>
          <BG1>
            <Text9>Posts</Text9>
          </BG1>
        </Group5>
        <Photos>Resume</Photos>
      </BG>
      <Group1>
        <ContentBlock />
        <Group6>
          <Group7>
            <Header>Past Interviews</Header>
            <Text7>8m ago</Text7>
          </Group7>
          <Paragraph3>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph3>
        </Group6>
      </Group1>
      <DividerLine />
      <Group2>
        <ContentBlock1 />
        <Group8>
          <Group9>
            <Text6>Header</Text6>
            <Text5>8m ago</Text5>
          </Group9>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group8>
      </Group2>
      <DividerLine1 />
      <Group3>
        <ContentBlock2 />
        <Group10>
          <Group11>
            <Text4>Header</Text4>
            <Text3>8m ago</Text3>
          </Group11>
          <Paragraph1>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph1>
        </Group10>
      </Group3>
      <DividerLine2 />
      <Group4>
        <ContentBlock3 />
        <Group12>
          <Group13>
            <Text2>Header</Text2>
            <Text1>8m ago</Text1>
          </Group13>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group12>
      </Group4>
      <DividerLine3 />
    </ProfilePostsRootRoot>
  );
};

const ProfilePostsRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 0px 39px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Group = styled.div`
  width: 100.27%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: -51px 0px 40px -1px;
  padding: 141px 109px 0px 109px;
  box-sizing: border-box;
`;
const FernRectangle = styled.div`
  width: 376px;
  height: 245px;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 27px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 73px 16px 73px 17px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const Settings = styled.div`
  align-self: flex-start;
  margin: 8px 35px 72px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Profile = styled.div`
  align-self: flex-start;
  margin: 0px 0px 63px 0px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Logout = styled.div`
  align-self: flex-start;
  margin: 8px 0px 72px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Ellipse = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: center;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-end;
  margin: 0px 74px 8px 0px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-end;
  margin: 0px 110px 0px 0px;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 91.47%;
  gap: 50.5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 16px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/rOsxtREjbVAIQ1KFwbBf.svg");
`;
const Group5 = styled.div`
  width: 72.06%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  width: 54px;
  height: 19px;
  left: 59px;
  top: 14px;
  position: absolute;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: 100.29%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 14px 63.5px 13px 63.5px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Fulmik6IoD8g8xv0cfqV.svg");
`;
const Text9 = styled.div`
  align-self: flex-end;
  color: #5db074;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Photos = styled.div`
  align-self: flex-end;
  margin: 14px 0px 13px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
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
  font-family: Inter;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph3 = styled.div`
  width: 97.11%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 16px 16px 0px;
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
  margin: 0px 0px 15px 0px;
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
const Text6 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: 97.11%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine1 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 16px 16px 0px;
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
const Text4 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: 97.11%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine2 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 16px 16px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 91.47%;
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
const Group12 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group13 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: 97.11%;
  align-self: flex-start;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine3 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 16px 0px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
