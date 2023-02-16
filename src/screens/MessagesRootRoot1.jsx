import React from "react";
import styled from "styled-components";

export const MessagesRootRoot1 = ({}) => {
  return (
    <MessagesRootRoot>
      <PageHeader>
        <Text2>Back</Text2>
        <Text3>Messages</Text3>
        <Filter>Home</Filter>
      </PageHeader>
      <BG1>
        <Paragraph3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla quam eu faci lisis mollis.{" "}
        </Paragraph3>
      </BG1>
      <Element2>
        <Paragraph1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </Paragraph1>
      </Element2>
      <Element1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </Paragraph>
      </Element1>
      <BG2>
        <Paragraph2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fringilla quam eu faci lisis mollis.{" "}
        </Paragraph2>
      </BG2>
      <BG>
        <Text1>Message here...</Text1>
        <Ellipse>
          <Image1 src={`https://file.rendit.io/n/6AttJw3GhjmeSmQsreX2.svg`} />
        </Ellipse>
      </BG>
    </MessagesRootRoot>
  );
};

const MessagesRootRoot = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 14px 16px 14px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 98.85%;
  gap: 49px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 20px 0px;
  box-sizing: border-box;
`;
const Text2 = styled.div`
  align-self: flex-start;
  margin: 8px 12px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  align-self: flex-start;
  font-size: 30px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  box-sizing: border-box;
`;
const Filter = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  text-align: right;
  box-sizing: border-box;
`;
const BG1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
  padding: 15px 16px 39px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/kvZ3d1xfVZgNMhoq30Po.svg");
`;
const Paragraph3 = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 5px 0px 0px;
  padding: 15px 16px 37px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/pMf7fvYb4Adk1G2x684b.svg");
`;
const Paragraph1 = styled.div`
  width: 100%;
  align-self: center;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const Element1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 4px 0px 0px;
  padding: 15px 16px 37px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/pMf7fvYb4Adk1G2x684b.svg");
`;
const Paragraph = styled.div`
  width: 100%;
  align-self: center;
  color: #ffffff;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const BG2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 164px 2px;
  padding: 15px 16px 39px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/kvZ3d1xfVZgNMhoq30Po.svg");
`;
const Paragraph2 = styled.div`
  width: 100%;
  height: 100%;
  align-self: center;
  font-size: 14px;
  font-family: Inter;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 98.85%;
  gap: 163px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  padding: 8px 8px 8px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/svvivoFouORDZPGdUXfF.svg");
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 8px 0px 7px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  box-sizing: border-box;
`;
const Ellipse = styled.div`
  width: -485.71%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 12px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/SrkvQ8BlO2iHi4sAKQwP.svg");
`;
const Image1 = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: center;
  box-sizing: border-box;
`;
