import React from "react";
import styled from "styled-components";

export const ProfilePostsRootRoot1 = ({}) => {
  const ButtonPrimary2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimary1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ProfilePostsRootRoot>
      <Group>
        <FernRectangle>
          <Settings>Edit</Settings>
          <Text1>Profile</Text1>
          <Logout>Messages</Logout>
        </FernRectangle>
        <ButtonPrimary2
          onClick={(e) => ButtonPrimary2Function(e, "ButtonPrimary2")}
        >
          <SignUp>📅</SignUp>
        </ButtonPrimary2>
        <Group5>
          <Ellipse src={`https://file.rendit.io/n/0QBzetdZ4zhWBIy43ANF.png`} />
          <ButtonPrimary
            onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
          >
            <ClickMe>Do Interviews!</ClickMe>
          </ButtonPrimary>
        </Group5>
      </Group>
      <Text2>Joe Job Seeker</Text2>
      <Text3>A mantra goes here</Text3>
      <BG>
        <Group6>
          <Text4>Search</Text4>
          <BG1>
            <Text5>Posts</Text5>
          </BG1>
        </Group6>
        <Photos>Resume</Photos>
      </BG>
      <Group1>
        <ContentBlock />
        <Group7>
          <Group8>
            <Header>Past Interviews</Header>
            <Text6>8m ago</Text6>
          </Group8>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group7>
      </Group1>
      <DividerLine />
      <Group2>
        <ContentBlock1 />
        <Group9>
          <Header1>Upcoming interview</Header1>
          <Paragraph1>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph1>
          <ButtonPrimary1
            onClick={(e) => ButtonPrimary1Function(e, "ButtonPrimary1")}
          >
            <ClickMe1>!</ClickMe1>
          </ButtonPrimary1>
          <Text7>8m ago</Text7>
        </Group9>
      </Group2>
      <DividerLine1 />
      <Group3>
        <ContentBlock2 />
        <Group10>
          <Group11>
            <Text8>Header</Text8>
            <Text9>8m ago</Text9>
          </Group11>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group10>
      </Group3>
      <DividerLine2 />
      <Group4>
        <ContentBlock3 />
        <Group12>
          <Group13>
            <Text10>Header</Text10>
            <Text11>8m ago</Text11>
          </Group13>
          <Paragraph3>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph3>
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
  gap: 35px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-start;
  margin: -51px 0px 21px -1px;
  padding: 0px 4px;
  box-sizing: border-box;
`;
const FernRectangle = styled.div`
  width: 376px;
  height: 245px;
  left: 0px;
  top: 0px;
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
  font-family: Inter;
  box-sizing: border-box;
`;
const Text1 = styled.div`
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
const ButtonPrimary2 = styled.button`
  width: 18.79%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 261px 0px 0px 0px;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 88.26%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 141px 0px 10px 0px;
  padding: 120px 0px 0px 0px;
  box-sizing: border-box;
`;
const Ellipse = styled.img`
  width: 158px;
  min-width: 0px;
  height: 158px;
  min-height: 0px;
  left: 0px;
  top: 0px;
  position: absolute;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 0px 74px 8px 0px;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text3 = styled.div`
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
  background-image: url("https://file.rendit.io/n/oLaM0JZcotvRkMlpVcKp.svg");
`;
const Group6 = styled.div`
  width: 72.06%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text4 = styled.div`
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
  background-image: url("https://file.rendit.io/n/XYq8s8X0sFsTlLU8IUsl.svg");
`;
const Text5 = styled.div`
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
const Group7 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group8 = styled.div`
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
const Text6 = styled.div`
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
const Group9 = styled.div`
  width: 89.07%;
  position: relative;
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Header1 = styled.div`
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 42px 0px;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: 269px;
  height: 34px;
  left: 0px;
  top: 27px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const ButtonPrimary1 = styled.button`
  width: 7.2%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  margin: 0px 35px 24px 0px;
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
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  position: relative;
  align-self: flex-start;
  margin: 2px 0px 42px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
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
const Text8 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text9 = styled.div`
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
const Text10 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text11 = styled.div`
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
