import React from "react";
import styled from "styled-components";

export const LogIn1 = ({}) => {
  const ButtonPrimaryFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const DeleteButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <LogIn>
      <Text6>Log In</Text6>
      <BG>
        <Text5>Email</Text5>
      </BG>
      <BG1>
        <Text3>Password</Text3>
        <Text4>Show</Text4>
      </BG1>
      <ButtonPrimary onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <Text2>Log In</Text2>
      </ButtonPrimary>
      <Text1>Forgot your password?</Text1>
      <SilverRectangle>
        <Background>
          <Group>
            <WhiteRectangle25>
              <Symbol26>Q</Symbol26>
            </WhiteRectangle25>
            <WhiteRectangle24>
              <Symbol25>W</Symbol25>
            </WhiteRectangle24>
            <WhiteRectangle23>
              <Symbol24>E</Symbol24>
            </WhiteRectangle23>
            <WhiteRectangle22>
              <Symbol23>R</Symbol23>
            </WhiteRectangle22>
            <WhiteRectangle21>
              <Symbol22>T</Symbol22>
            </WhiteRectangle21>
            <WhiteRectangle20>
              <Symbol21>Y</Symbol21>
            </WhiteRectangle20>
            <WhiteRectangle19>
              <Symbol20>U</Symbol20>
            </WhiteRectangle19>
            <WhiteRectangle18>
              <Symbol19>I</Symbol19>
            </WhiteRectangle18>
            <WhiteRectangle17>
              <Symbol18>O</Symbol18>
            </WhiteRectangle17>
            <WhiteRectangle16>
              <Symbol17>P</Symbol17>
            </WhiteRectangle16>
          </Group>
          <Group1>
            <WhiteRectangle15>
              <Symbol16>A</Symbol16>
            </WhiteRectangle15>
            <WhiteRectangle14>
              <Symbol15>S</Symbol15>
            </WhiteRectangle14>
            <WhiteRectangle13>
              <Symbol14>D</Symbol14>
            </WhiteRectangle13>
            <WhiteRectangle12>
              <Symbol13>F</Symbol13>
            </WhiteRectangle12>
            <WhiteRectangle11>
              <Symbol12>G</Symbol12>
            </WhiteRectangle11>
            <WhiteRectangle10>
              <Symbol11>H</Symbol11>
            </WhiteRectangle10>
            <WhiteRectangle9>
              <Symbol10>J</Symbol10>
            </WhiteRectangle9>
            <WhiteRectangle8>
              <Symbol9>K</Symbol9>
            </WhiteRectangle8>
            <WhiteRectangle7>
              <Symbol8>L</Symbol8>
            </WhiteRectangle7>
          </Group1>
          <Group2>
            <WhiteSquare>
              <Symbol> </Symbol>
              <Shift
                src={`https://file.rendit.io/n/lhiaBPMMkUQmkehh8eLd.svg`}
              />
            </WhiteSquare>
            <WhiteRectangle6>
              <Symbol7>Z</Symbol7>
            </WhiteRectangle6>
            <WhiteRectangle5>
              <Symbol6>X</Symbol6>
            </WhiteRectangle5>
            <WhiteRectangle4>
              <Symbol5>C</Symbol5>
            </WhiteRectangle4>
            <WhiteRectangle3>
              <Symbol4>V</Symbol4>
            </WhiteRectangle3>
            <WhiteRectangle2>
              <Symbol3>B</Symbol3>
            </WhiteRectangle2>
            <WhiteRectangle1>
              <Symbol2>N</Symbol2>
            </WhiteRectangle1>
            <WhiteRectangle>
              <Symbol1>M</Symbol1>
            </WhiteRectangle>
            <Element4>
              <Label3> </Label3>
              <DeleteButton
                onClick={(e) => DeleteButtonFunction(e, "DeleteButton")}
              />
            </Element4>
          </Group2>
          <Group3>
            <Element3>
              <Label2>123</Label2>
            </Element3>
            <Element2>
              <Label1>space</Label1>
            </Element2>
            <Element1>
              <Label>Go</Label>
            </Element1>
          </Group3>
          <Group4>
            <Emoji src={`https://file.rendit.io/n/fgKc23fktyo90vMUrXAJ.svg`} />
            <Dictation
              src={`https://file.rendit.io/n/vIb6EegRVv4hTW5MO77T.svg`}
            />
          </Group4>
          <HomeIndicator />
        </Background>
      </SilverRectangle>
    </LogIn>
  );
};

const LogIn = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 22px 0px 0px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const Text6 = styled.div`
  align-self: flex-end;
  margin: 0px 142px 13px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 91.47%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 13px 0px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/G0xMnPYpAxZWTVRQLgML.svg");
`;
const Text5 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const BG1 = styled.div`
  width: 91.47%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 13px 151px 0px;
  padding: 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/G0xMnPYpAxZWTVRQLgML.svg");
`;
const Text3 = styled.div`
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-end;
  margin: 1px 0px 0px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  text-align: right;
  box-sizing: border-box;
`;
const ButtonPrimary = styled.button`
  width: 91.47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
  margin: 0px 13px 0px 0px;
  padding: 0px;
  padding-top: 16px;
  padding-right: 148px;
  padding-bottom: 16px;
  padding-left: 148px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #5db074;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Text2 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 95px 49px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 600;

  box-sizing: border-box;
`;
const SilverRectangle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  box-sizing: border-box;
  background-color: #ccced3;
`;
const Background = styled.div`
  width: 100%;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 3px;
  box-sizing: border-box;
  background-color: #d1d5db;
  backdrop-filter: blur(21px);
`;
const Group = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const WhiteRectangle25 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol26 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle24 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 5px 7px 5px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol25 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle23 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 9px 7px 9px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol24 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle22 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol23 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle21 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol22 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle20 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol21 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle19 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol20 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle18 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 12px 7px 12px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol19 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle17 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol18 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle16 = styled.div`
  width: 10.03%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol17 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const Group1 = styled.div`
  width: 89.97%;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 18px 1px 0px;
  box-sizing: border-box;
`;
const WhiteRectangle15 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol16 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle14 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol15 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle13 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol14 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle12 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 9px 7px 9px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol13 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle11 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol12 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle10 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol11 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle9 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 9px 7px 9px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol10 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle8 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol9 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle7 = styled.div`
  width: 11.15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 9px 7px 9px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol8 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const Group2 = styled.div`
  width: 100%;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 1px 0px;
  box-sizing: border-box;
`;
const WhiteSquare = styled.div`
  width: 12.96%;
  height: 42px;
  position: relative;
  align-self: flex-start;
  margin: 0px 9px 0px 0px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol = styled.div`
  width: 0px;
  height: 27px;
  left: 20.2px;
  top: 8px;
  position: absolute;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const Shift = styled.img`
  width: 18.9px;
  min-width: 0px;
  height: 16.5px;
  min-height: 0px;
  left: 11.7px;
  top: 12.2px;
  position: absolute;
  box-sizing: border-box;
`;
const WhiteRectangle6 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol7 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle5 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol6 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle4 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol5 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle3 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol4 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle2 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 8px 7px 8px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol3 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle1 = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 1px 0px 0px;
  padding: 8px 7px 7px 7px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol2 = styled.div`
  align-self: flex-end;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const WhiteRectangle = styled.div`
  width: 9.88%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 8px 0px 0px;
  padding: 8px 6px 7px 6px;
  border-radius: 4.6px;
  box-sizing: border-box;
  background-color: #fcfcfe;
  box-shadow: 0px 1px 0px 0px #898a8d;
`;
const Symbol1 = styled.div`
  align-self: flex-start;
  font-size: 22.5px;
  font-family: SF Pro Text;
  text-align: center;
  letter-spacing: -0.55px;
  box-sizing: border-box;
`;
const Element4 = styled.div`
  width: 12.96%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 12.7px 9.66px 12.3px 9.66px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/JgD8AGIKiDIEtZOYMxrm.svg");
`;
const Label3 = styled.div`
  width: 42px;
  height: 21px;
  left: 0px;
  top: 11px;
  position: absolute;
  font-size: 16px;
  font-family: SF Pro Text;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const DeleteButton = styled.button`
  width: 22.7px;
  height: 17px;
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/6bYdNz1BFqjqiI2JGN9y.svg");
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const Group3 = styled.div`
  width: 100%;
  gap: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 17px 0px;
  box-sizing: border-box;
`;
const Element3 = styled.div`
  width: 24.79%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 11px 0px 10px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/NkbNEY3Fs2QbZbxnaPUa.svg");
`;
const Label2 = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 16px;
  font-family: SF Pro Text;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element2 = styled.div`
  width: 51.85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 11px 0px 10px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/tmIoaSCRfZdiqEAWhafz.svg");
`;
const Label1 = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 16px;
  font-family: SF Pro Text;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Element1 = styled.div`
  width: 25.07%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  padding: 11px 0px 10px 0px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/Erad58NMiTXfONelPmnT.svg");
`;
const Label = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 16px;
  font-family: SF Pro Text;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.32px;
  box-sizing: border-box;
`;
const Group4 = styled.div`
  width: 86.72%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin: 0px 0px 0px 22px;
  box-sizing: border-box;
`;
const Emoji = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  box-sizing: border-box;
`;
const Dictation = styled.img`
  min-width: 0px;
  min-height: 0px;
  align-self: flex-start;
  margin: 1px 0px;
  box-sizing: border-box;
`;
const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  flex-shrink: 0;
  align-self: flex-end;
  margin: 0px 117px 0px 0px;
  border-radius: 100px;
  box-sizing: border-box;
  background-color: #000000;
`;
