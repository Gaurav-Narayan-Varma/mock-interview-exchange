import React from "react";
import styled from "styled-components";

export const SearchRootRoot1 = ({}) => {
  return (
    <SearchRootRoot>
      <PageHeader>
        <Text3>Back</Text3>
        <Text2>Content</Text2>
        <Text1>Filter</Text1>
      </PageHeader>
      <BG>
        <Text4>Search</Text4>
      </BG>
      <Text5>Your mocks:</Text5>
      <Group>
        <ContentBlock />
        <Group4>
          <Group5>
            <Header>Joe</Header>
            <Text6>8m ago</Text6>
          </Group5>
          <Text9>https://meet.google.com/jrz-ngus-jov</Text9>
        </Group4>
      </Group>
      <DividerLine />
      <Group1>
        <ContentBlock1 />
        <Group6>
          <Group7>
            <Text7>Header</Text7>
            <Text8>8m ago</Text8>
          </Group7>
          <Paragraph>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph>
        </Group6>
      </Group1>
      <DividerLine1 />
      <Group2>
        <ContentBlock2 />
        <Group8>
          <Group9>
            <Text10>Header</Text10>
            <Text11>8m ago</Text11>
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
            <Text12>Header</Text12>
            <Text13>8m ago</Text13>
          </Group11>
          <Paragraph2>
            He'll want to use your yacht, and I don't want this thing smelling
            like fish.
          </Paragraph2>
        </Group10>
      </Group3>
      <DividerLine3 />
    </SearchRootRoot>
  );
};

const SearchRootRoot = styled.div`
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
  font-family: Inter;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Text1 = styled.div`
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
  font-family: Inter;
  box-sizing: border-box;
`;
const Text5 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 1px 6px;
  font-size: 24px;
  font-weight: 500;
  font-family: Inter;
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
const Text9 = styled.div`
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
const Text8 = styled.div`
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
  width: 100%;
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
  font-family: Inter;
  box-sizing: border-box;
`;
const Text13 = styled.div`
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
const DividerLine3 = styled.div`
  width: 277px;
  height: 1px;
  flex-shrink: 0;
  align-self: flex-end;
  border-style: solid;
  border-color: #e7e7e7;
  box-sizing: border-box;
`;
