import React from "react";
import styled from "styled-components";

export const ProfilePostsRootRoot1 = ({}) => {
  const ButtonPrimary1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ProfilePostsRootRoot>
      <Group>
        <FernRectangle>
          <Text14>Settings</Text14>
          <Text13>Profile</Text13>
          <Text12>Logout</Text12>
        </FernRectangle>
        <Ellipse src={`https://file.rendit.io/n/BGsSDj16piOQJib2b6EV.png`} />
        <ButtonPrimary1
          onClick={(e) => ButtonPrimary1Function(e, "ButtonPrimary1")}
        >
          <ILoveIt1>
            {"      "}
            Pi Tip
          </ILoveIt1>
          <Image1 src={`https://file.rendit.io/n/PW1dy5QGVzEe9E45aAVK.png`} />
        </ButtonPrimary1>
        <ButtonPrimary
          onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}
        >
          <ILoveIt>Message</ILoveIt>
        </ButtonPrimary>
      </Group>
      <Group1>
        <Text11>Victoria Robertson</Text11>
        <Star src={`https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg`} />
        <Star2 src={`https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg`} />
        <Star3 src={`https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg`} />
        <Star4 src={`https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg`} />
        <Star5 src={`https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg`} />
      </Group1>
      <Text10>A mantra goes here</Text10>
      <BG>
        <Group6>
          <Text9>Search</Text9>
          <BG1>
            <Posts>Past Interviews</Posts>
          </BG1>
        </Group6>
        <Photos>Resume</Photos>
      </BG>
      <Group2>
        <ContentBlock />
        <Group7>
          <Group8>
            <Header>Past Interviews</Header>
            <Text8>8m ago</Text8>
          </Group8>
          <Group9>
            <Paragraph3>
              He'll want to use your yacht, and I <br />
              don't want this thing smelling like fish.
            </Paragraph3>
            <DividerLine />
          </Group9>
        </Group7>
        <Star1>
          <Text1>5</Text1>
        </Star1>
      </Group2>
      <Group3>
        <ContentBlock1 />
        <Group10>
          <Group11>
            <Text7>Header</Text7>
            <Text6>8m ago</Text6>
          </Group11>
          <Group12>
            <Paragraph2>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Paragraph2>
            <DividerLine1 />
          </Group12>
        </Group10>
      </Group3>
      <Group4>
        <ContentBlock2 />
        <Group13>
          <Group14>
            <Text5>Header</Text5>
            <Text4>8m ago</Text4>
          </Group14>
          <Group15>
            <Paragraph1>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Paragraph1>
            <DividerLine2 />
          </Group15>
        </Group13>
      </Group4>
      <Group5>
        <ContentBlock3 />
        <Group16>
          <Group17>
            <Text3>Header</Text3>
            <Text2>8m ago</Text2>
          </Group17>
          <Group18>
            <Paragraph>
              He'll want to use your yacht, and I don't want this thing smelling
              like fish.
            </Paragraph>
            <DividerLine3 />
          </Group18>
        </Group16>
      </Group5>
    </ProfilePostsRootRoot>
  );
};

const ProfilePostsRootRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 0px 38px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Group = styled.div`
  width: 100.27%;
  position: relative;
  gap: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: -51px -1px 0px 0px;
  padding: 0px 6px 0px 9px;
  box-sizing: border-box;
`;
const FernRectangle = styled.div`
  width: 376px;
  height: 245px;
  left: 0px;
  top: 0px;
  position: absolute;
  gap: 62px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 73px 16px 73px 17px;
  box-sizing: border-box;
  background-color: #5db074;
`;
const Text14 = styled.div`
  align-self: flex-start;
  margin: 8px 0px 72px 0px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-start;
  margin: 0px 7px 63px 0px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text12 = styled.div`
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
  width: 158px;
  min-width: 0px;
  height: 158px;
  min-height: 0px;
  left: 109px;
  top: 141px;
  position: absolute;
  box-sizing: border-box;
`;
const ButtonPrimary1 = styled.button`
  width: 109.52%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin: 265px 0px 0px 0px;
  padding: 0px;
  padding-top: 4px;
  padding-right: 2px;
  padding-bottom: 1px;
  padding-left: 2px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #865db0;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const ILoveIt1 = styled.div`
  width: 67px;
  height: 19px;
  left: 24px;
  top: 16px;
  position: absolute;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 112.38%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 261px 0px 0px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 23.5px;
  padding-bottom: 13px;
  padding-left: 23.5px;
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
const Group1 = styled.div`
  position: relative;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 49px 8px 0px;
  padding: 0px 42px 0px 38px;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  width: 272px;
  height: 36px;
  left: 0px;
  top: 30px;
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Star = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const Star2 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const Star3 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const Star4 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const Star5 = styled.img`
  min-width: 0px;
  min-height: 0px;
  position: relative;
  align-self: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-end;
  margin: 0px 109px 0px 0px;
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
  align-self: flex-end;
  margin: 0px 15px 16px 0px;
  padding: 2px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/DyJypeD2gV1WMEa3Ba1J.svg");
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
const Text9 = styled.div`
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
  padding: 14px 25.5px 13px 25.5px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/CMiknAwXZ6WzOqIAmhXQ.svg");
`;
const Posts = styled.div`
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
const Group2 = styled.div`
  width: 90.93%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 15px 0px;
  box-sizing: border-box;
`;
const ContentBlock = styled.div`
  width: 14.66%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 16px 28px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group7 = styled.div`
  width: 71.26%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group8 = styled.div`
  width: 100%;
  gap: 73px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
const Text8 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Group9 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 49px 0px 1px 0px;
  box-sizing: border-box;
`;
const Paragraph3 = styled.div`
  width: 235px;
  height: 51px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Star1 = styled.div`
  width: 9.38%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 27px 0px 19px 0px;
  padding: 7px 11px 8px 11px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/9DF8JFY96OayARX8nm6W.svg");
`;
const Text1 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 82.4%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 15px 17px;
  box-sizing: border-box;
`;
const ContentBlock1 = styled.div`
  width: 18.05%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 28px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group10 = styled.div`
  width: 87.73%;
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
const Text7 = styled.div`
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
const Group12 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 49px 0px 1px 0px;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: 235px;
  height: 51px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine1 = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 82.4%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 15px 17px;
  box-sizing: border-box;
`;
const ContentBlock2 = styled.div`
  width: 18.05%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 28px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group13 = styled.div`
  width: 87.73%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group14 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Group15 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 49px 0px 1px 0px;
  box-sizing: border-box;
`;
const Paragraph1 = styled.div`
  width: 235px;
  height: 51px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine2 = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 82.4%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 17px;
  box-sizing: border-box;
`;
const ContentBlock3 = styled.div`
  width: 18.05%;
  height: 50px;
  align-self: flex-start;
  margin: 0px 0px 28px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group16 = styled.div`
  width: 87.73%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group17 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const Group18 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 49px 0px 1px 0px;
  box-sizing: border-box;
`;
const Paragraph = styled.div`
  width: 235px;
  height: 51px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const DividerLine3 = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
