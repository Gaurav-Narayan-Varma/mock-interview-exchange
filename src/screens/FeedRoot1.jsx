import React from "react";
import styled from "styled-components";

export const Feed1 = ({}) => {
  return (
    <Feed>
      <PageHeader>
        <Text11>Back</Text11>
        <Feed>Your Mocks</Feed>
        <Text12>Filter</Text12>
      </PageHeader>
      <BG>
        <Text10>Search</Text10>
      </BG>
      <Text2>Upcoming ...</Text2>
      <Group>
        <ContentBlock />
        <Header>Joe</Header>
        <Text9>8m ago</Text9>
      </Group>
      <DividerLine />
      <Group1>
        <ContentBlock1 />
        <Group4>
          <Group5>
            <Text8>Header</Text8>
            <Text7>8m ago</Text7>
          </Group5>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group4>
      </Group1>
      <DividerLine />
      <Group1>
        <ContentBlock1 />
        <Group4>
          <Group5>
            <Text8>Header</Text8>
            <Text7>8m ago</Text7>
          </Group5>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group4>
      </Group1>
      <DividerLine />
      <Group1>
        <ContentBlock1 />
        <Group4>
          <Group5>
            <Text8>Header</Text8>
            <Text7>8m ago</Text7>
          </Group5>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group4>
      </Group1>
      <DividerLine />
      <Text1>Past</Text1>
    </Feed>
  );
};

const DividerLine = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
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
  align-items: flex-start;
  box-sizing: border-box;
`;
const ContentBlock1 = styled.div`
  width: 16.08%;
  height: 50px;
  margin: 0px 0px 11px 0px;
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
  align-items: flex-start;
  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: flex-start;
  box-sizing: border-box;
`;
const Text8 = styled.div`
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-end;
  margin: 2px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Paragraph2 = styled.div`
  width: 97.11%;
  font-size: 14px;

  box-sizing: border-box;
`;
const Feed = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 22px 15px 192px 15px;
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
  align-items: flex-start;
  margin: 0px 0px 12px 0px;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  margin: 8px 5px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Feed = styled.div`
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text12 = styled.div`
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
  align-items: flex-start;
  margin: 0px 0px 17px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/0pZODDBDc3CIo6lXTaI8.svg");
`;
const Text10 = styled.div`
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text2 = styled.div`
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
  align-items: flex-start;
  margin: 0px 0px 11px 0px;
  box-sizing: border-box;
`;
const ContentBlock = styled.div`
  width: 16.95%;
  height: 50px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;
`;
const Header = styled.div`
  margin: 0px 182px 31px 0px;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const Text9 = styled.div`
  margin: 2px 0px 31px 0px;
  color: #bdbdbd;
  font-size: 14px;

  text-align: right;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
