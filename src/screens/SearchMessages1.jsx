import React from "react";
import styled from "styled-components";

export const SearchMessages1 = ({}) => {
  return (
    <SearchMessages>
      <PageHeader>
        <Text10>Back</Text10>
        <Content>Messages</Content>
        <Text11>Filter</Text11>
      </PageHeader>
      <BG>
        <Text9>Search</Text9>
      </BG>
      <Group>
        <ContentBlock1 />
        <Group4>
          <Group5>
            <Text6>Header</Text6>
            <Text5>8m ago</Text5>
          </Group5>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group4>
      </Group>
      <DividerLine1 />
      <Group1>
        <ContentBlock />
        <Group6>
          <Group7>
            <Text8>Header</Text8>
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
        <ContentBlock2 />
        <Group8>
          <Group9>
            <Text4>Header</Text4>
            <Text3>8m ago</Text3>
          </Group9>
          <Paragraph1>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph1>
        </Group8>
      </Group2>
      <DividerLine2 />
      <Group3>
        <ContentBlock3 />
        <Group10>
          <Group11>
            <Text2>Header</Text2>
            <Text1>8m ago</Text1>
          </Group11>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group10>
      </Group3>
      <DividerLine3 />
    </SearchMessages>
  );
};

const SearchMessages = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 15px 266px 15px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 99.42%;
  gap: 56px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Text10 = styled.div`
  align-self: flex-start;
  margin: 8px 5px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Content = styled.div`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text11 = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 99.42%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 35px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/OQfUmlqPYaBDI0iwWZG5.svg");
`;
const Text9 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 99.42%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
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
const Group4 = styled.div`
  width: 89.07%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Group5 = styled.div`
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
  margin: 0px 0px 1px 0px;
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
  align-self: flex-end;
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
const Text8 = styled.div`
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
  margin: 0px 0px 1px 0px;
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
  align-self: flex-end;
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
  margin: 0px 0px 1px 0px;
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
  align-self: flex-end;
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
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
