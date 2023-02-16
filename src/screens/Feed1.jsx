import React from "react";
import styled from "styled-components";

export const Feed1 = ({}) => {
  return (
    <Feed>
      <PageHeader>
        <Text2>Back</Text2>
        <Feed>Your Mocks</Feed>
        <Text1>Filter</Text1>
      </PageHeader>
      <BG>
        <Text3>Search</Text3>
      </BG>
      <Text11>Upcoming ...</Text11>
      <Group>
        <ContentBlock />
        <Header>Joe</Header>
        <Text4>8m ago</Text4>
      </Group>
      <DividerLine />
      <Group1>
        <ContentBlock1 />
        <Group5>
          <Group6>
            <Text5>Header</Text5>
            <Text6>8m ago</Text6>
          </Group6>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group5>
      </Group1>
      <DividerLine1 />
      <Group2>
        <ContentBlock2 />
        <Group7>
          <Group8>
            <Text7>Header</Text7>
            <Text8>8m ago</Text8>
          </Group8>
          <Paragraph1>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph1>
        </Group7>
      </Group2>
      <DividerLine2 />
      <Group3>
        <ContentBlock3 />
        <Group9>
          <Group10>
            <Text9>Header</Text9>
            <Text10>8m ago</Text10>
          </Group10>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group9>
      </Group3>
      <DividerLine3 />
      <Text12>Past</Text12>
      <Group4>
        <ContentBlock4 />
        <Group11>
          <Header1>Joe</Header1>
          <Text14>&#60;insert google meets link&#62;</Text14>
        </Group11>
        <Text13>8m ago</Text13>
      </Group4>
      <DividerLine4 />
    </Feed>
  );
};

const Feed2 = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 15px 82px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 99.42%;
  gap: 45px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 12px 0px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 8px 5px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Feed = styled.div`
  align-self: flex-start;
  font-size: 30px;
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
  width: 99.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 17px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/hRfZ56cvzEvor7Xgj57y.svg");
`;
const Text3 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 8px 4px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Group = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 11px 0px;
  box-sizing: border-box;
`;
const ContentBlock = styled.div`
  width: 16.95%;
  height: 50px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Header = styled.div`
  align-self: flex-start;
  margin: 0px 182px 31px 0px;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 2px 0px 31px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const DividerLine = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
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
const Group5 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group6 = styled.div`
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
const DividerLine1 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
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
const Paragraph1 = styled.div`
  width: 97.11%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const DividerLine2 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Group3 = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
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
const Group9 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group10 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Text9 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text10 = styled.div`
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
const DividerLine3 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
const Text12 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 18px 1px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 11px 0px;
  box-sizing: border-box;
`;
const ContentBlock4 = styled.div`
  width: 16.95%;
  height: 50px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Group11 = styled.div`
  width: 60%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 34px 6px 0px;
  box-sizing: border-box;
`;
const Header1 = styled.div`
  align-self: flex-start;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text14 = styled.div`
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const Text13 = styled.div`
  align-self: flex-start;
  margin: 2px 0px 31px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const DividerLine4 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
