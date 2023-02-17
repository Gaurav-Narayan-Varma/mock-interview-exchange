import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import { initializeApp } from 'firebase/app';
import { getFirestore, query, where, doc, setDoc, getDocs, collection, addDoc } from "firebase/firestore";
import 'firebase/firestore';


// initializing firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5uvpjFrShXz-ntdEppqQs952_WE-alJE",
  authDomain: "mock-interview-exchange.firebaseapp.com",
  projectId: "mock-interview-exchange",
  storageBucket: "mock-interview-exchange.appspot.com",
  messagingSenderId: "635925744294",
  appId: "1:635925744294:web:e9636fa4c77e398af30267",
  measurementId: "G-W8BXLW9Q20"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 
// query firebase for open technicals
const qOT = query(collection(db, "mocks"), 
  where("technical", "==", true),
  where("interviewee", "==", "")
);
// take a snapshot of the query
const queryOTSnapshot = await getDocs(qOT)

// 
// query firebase for open behaviorals
const qOB = query(collection(db, "mocks"), 
  where("technical", "==", false),
  where("interviewee", "==", "")
);
// take a snapshot of the query
const queryqOBSnapshot = await getDocs(qOB)
queryqOBSnapshot.forEach((doc) => {
  // console.log(doc.id, " => ", doc.data());
});

// 
// query firebase for closed Peter Pierre mocks
const qPPR = query(collection(db, "mocks"),
  where("interviewee", "==", "Peter Pierre")
)
const qPPH = query(collection(db, "mocks"),
  where("interviewer", "==", "Peter Pierre")
)
// take a snapshot of the query
const queryPPRSnapshot = await getDocs(qPPR)
const queryPPHSnapshot = await getDocs(qPPH)
let combinedSnapshot = []
queryPPRSnapshot.forEach((doc) => {
  combinedSnapshot.push(doc.data())
})
queryPPHSnapshot.forEach((doc) => {
  combinedSnapshot.push(doc.data())
})
 
export const Market1 = ({}) => {
  
let mockCards = []
let mockNames = []
let mockDates = []
let cards2 = []
let names2 = []
let cards3 = []
let names3 = []
  
  const navigate = useNavigate();


  const [myMocks, setMocks] = useState([])
  const [myNames, setNames] = useState([])
  const [myDates, setDates] = useState([])
  const [myCards2, setCards2] = useState([])
  const [myNames2, setNames2] = useState([])
  const [myCards3, setCards3] = useState([])
  const [myNames3, setNames3] = useState([])

  // queryqOBSnapshot

  useEffect(()=>{
    queryqOBSnapshot.forEach(async (mock) => {
      cards3.push(<ItemNameGoesHere>{mock.data().interviewer}</ItemNameGoesHere>)
      setCards3(myCards3.concat(cards3))

      // for each mock interviewer, query their document in the users database 
      const techQuery = query(collection(db, "users"), where("name", "==", mock.data().interviewer))
      const techSnapShot = await getDocs(techQuery)
      techSnapShot.forEach((partner) => {
        names3.push(<WhiteSquare8 key={Math.random()}> <img src={partner.data().image} /> </WhiteSquare8>)
        setNames3(myNames3.concat(names3))
      })
    })
  }, [queryqOBSnapshot])

  useEffect(()=>{
    queryOTSnapshot.forEach(async (mock) => {
      cards2.push(<ItemNameGoesHere>{mock.data().interviewer}</ItemNameGoesHere>)
      setCards2(myCards2.concat(cards2))

      // for each mock interviewer, query their document in the users database 
      const techQuery = query(collection(db, "users"), where("name", "==", mock.data().interviewer))
      const techSnapShot = await getDocs(techQuery)
      techSnapShot.forEach((partner) => {
        names2.push(<WhiteSquare8 key={Math.random()}> <img src={partner.data().image} /> </WhiteSquare8>)
        setNames2(myNames2.concat(names2))
      })
    })
  }, [queryOTSnapshot])

  
  useEffect(()=>{
    combinedSnapshot.forEach(async (mock) => {
      let partner
      
      const date = new Date(mock.date.seconds*1000);
      const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'America/Los_Angeles'
      };
      const formattedDate = date.toLocaleString('en-US', options);
      mockDates.push(<ItemNameGoesHere>{formattedDate}</ItemNameGoesHere>)

      setDates(myDates.concat(mockDates))
        // <WhiteSquare5><img src="https://media.licdn.com/dms/image/C5603AQHLDkCedDmfiQ/profile-displayphoto-shrink_400_400/0/1649972194519?e=1681948800&v=beta&t=SqQK6g-PqlBW4QyokfiU3TZKhs_eAxecgp-buQB4WF8" /></WhiteSquare5>

      mock.interviewer == 'Peter Pierre' ? partner = mock.interviewee : partner = mock.interviewer
      // for each partner, query the users database to create a mock card with their image inside
      const partnerQuery = query(collection(db, "users"), where("name", "==", partner))
      const partnerSnapShot = await getDocs(partnerQuery)
      partnerSnapShot.forEach((partner) => {
        mockCards.push(<WhiteSquare8 key={Math.random()}> <img src={partner.data().image} /> </WhiteSquare8>)
        setMocks(myMocks.concat(mockCards))

        mockNames.push(<ItemNameGoesHere>{partner.data().name}</ItemNameGoesHere>)
        setNames(myNames.concat(mockNames))
      })

      // generate components with names of users inside
      

    })
  }, [combinedSnapshot])
  

  const ButtonPrimaryFunction = (e, name) => {

    navigate("/Search1");

  };
  const ButtonProfile = (e, name) => {
    navigate("/ProfilePosts1");
  };
  const ButtonFeedback = (e, name) => {
    navigate("/BG1");
  };
  const ButtonTip = (e, name) => {
    navigate("/Tip1");
  };
  const ButtonReview = (e, name) => {
    navigate("/Rating1");
  };

  return (
    <Market>
      <PageHeader>
        <Back onClick={(e) => ButtonProfile(e, "ButtonPrimary")} >My Profile (1)</Back>
        <Text6>Market</Text6>
        {/* <Text7 >Filter</Text7> */}
      </PageHeader>
      <BG>
        <Text5>Search</Text5>
      </BG>
      <Text4>Your mocks</Text4>
      <Group  onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        {myMocks.length >= 3 ? myMocks : 'loading...'}
      </Group>
      <Group1 >
        <Group7>
          {myNames.length >= 3 ? myNames[0] : 'loading...'}
          {myDates.length >= 3 ? myDates[0] : 'loading...'}
          <Group8>
            <ButtonPrimary  onClick={(e) => ButtonFeedback(e, "ButtonPrimary")}>
              Feedback
            </ButtonPrimary>
          </Group8>
        </Group7>
        <Group7 >
          {myNames.length >= 3 ? myNames[1] : 'loading...'}
          {myDates.length >= 3 ? myDates[0] : 'loading...'}
          <Group8>
            <ButtonPrimary  onClick={(e) => ButtonReview(e, "ButtonPrimary")} >
              Review
            </ButtonPrimary>
          </Group8>
        </Group7>
        <Group7 >
          {myNames.length >= 3 ? myNames[2] : 'loading...'}
          {myDates.length >= 3 ? myDates[0] : 'loading...'}
          <Group8>
            <ButtonPrimary  onClick={(e) => ButtonTip(e, "ButtonPrimary")} >
              Tip
            </ButtonPrimary>
          </Group8>
        </Group7>
      </Group1>
      <Group2>
        <Text2>Technical Mock</Text2>
      </Group2>
      <Group3  onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        {myNames2.length >= 3 ? myNames2[0] : 'loading...'}
        {myNames2.length >= 3 ? myNames2[1] : 'loading...'}
        {myNames2.length >= 3 ? myNames2[2] : 'loading...'}
      </Group3>
      <Group4  onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <Group7>
          {myCards2.length >= 3 ? myCards2[0] : 'loading...'}
        </Group7>
        <Group7>
          {myCards2.length >= 3 ? myCards2[1] : 'loading...'}
        </Group7>
        <Group7>
          {myCards2.length >= 3 ? myCards2[2] : 'loading...'}
        </Group7>
      </Group4>
      <Text1>Behavioral Mock</Text1>
      <Group5  onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        {myNames3.length >= 3 ? myNames3[0] : 'loading...'}
        {myNames3.length >= 3 ? myNames3[1] : 'loading...'}
        {myNames3.length >= 3 ? myNames3[2] : 'loading...'}
      </Group5>
      <Group6  onClick={(e) => ButtonPrimaryFunction(e, "ButtonPrimary")}>
        <Group7>
          {myCards3.length >= 3 ? myCards3[0] : 'loading...'}
        </Group7>
        <Group7>
          {myCards3.length >= 3 ? myCards3[1] : 'loading...'}
        </Group7>
        <Group7>
          {myCards3.length >= 3 ? myCards3[2] : 'loading...'}
        </Group7>
      </Group6>
    </Market>
  );
};

const Market = styled.div`
  gap: 2.22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 2px 42.1px 2px;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const PageHeader = styled.div`
  width: 92.45%;
  gap: 21px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  margin: 0px 0px 26.8px 0px;
  box-sizing: border-box;
`;
const Back = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text6 = styled.div`
  align-self: flex-start;
  margin: 0px 59px 0px 0px;
  font-size: 30px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const Text7 = styled.div`
  align-self: flex-start;
  margin: 8px 0px 9px 0px;
  color: #5db074;
  font-size: 16px;
  font-weight: 500;

  text-align: right;
  box-sizing: border-box;
`;
const BG = styled.div`
  width: 92.45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 11px 4.78px 0px;
  padding: 16px 16px 15px 16px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/s7NVJlOCXhuV90V80ZRo.svg");
`;
const Text5 = styled.div`
  align-self: flex-start;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text4 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 2.78px 9px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Group = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5.78px 5px;
  box-sizing: border-box;
`;
const WhiteSquare8 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  margin: 0px 3px 0px 0px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WhiteSquare7 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WhiteSquare6 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Group1 = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 8.78px 5px;
  box-sizing: border-box;
`;
const Group7 = styled.div`
  width: 34.38%;
  gap: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 3px 0px 0px;
  box-sizing: border-box;
`;
const ItemNameGoesHere = styled.div`
  width: 100%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const Group8 = styled.div`
  width: 89.09%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  padding: 16px 49px 0px 49px;
  box-sizing: border-box;
`;

const ButtonPrimary = styled.button`
  width: 98px;
  height: 24px;
  left: 0px;
  top: 0px;
  color: #ffffff;
  position: absolute;
  padding: 0px;
  border-width: 0px;
  border-radius: 100px;
  box-sizing: content-box;
  background-color: #bf3030;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const LogIn = styled.button`
  position: relative;
  align-self: center;
  padding: 0px;
  text-align: center;
  border-width: 0px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
`;
const Starting = styled.div`
  width: 55px;
  height: 17px;
  left: 22px;
  top: 3px;
  position: absolute;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;

  text-align: center;
  box-sizing: border-box;
`;
const ItemNameGoesHere1 = styled.div`
  width: 34.38%;
  align-self: flex-start;
  margin: 0px 0px 19px 0px;
  font-size: 14px;

  box-sizing: border-box;
`;
const ItemNameGoesHere2 = styled.div`
  width: 34.38%;
  align-self: flex-start;
  margin: 0px 0px 36px 0px;
  font-size: 14px;

  box-sizing: border-box;
`;
const Group2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 0px 9px;
  box-sizing: border-box;
`;
const Text3 = styled.div`
  width: 179px;
  height: 29px;
  left: 0px;
  top: 0px;
  position: absolute;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Text2 = styled.div`
  position: relative;
  align-self: flex-start;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;

const Group3 = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5.78px 5px;
  box-sizing: border-box;
`;
const WhiteSquare5 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const WhiteSquare4 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WhiteSquare3 = styled.div`
  width: 34.38%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Group4 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin: 0px 0px 16.6px 0px;
  box-sizing: border-box;
`;
const ItemNameGoesHere3 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const ItemNameGoesHere4 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const ItemNameGoesHere5 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const Text1 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 7.7px 9px;
  font-size: 24px;
  font-weight: 500;

  box-sizing: border-box;
`;
const Group5 = styled.div`
  width: 96.77%;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 0px 0px 5.78px 5px;
  box-sizing: border-box;
`;
const WhiteSquare2 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WhiteSquare1 = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WhiteSquare = styled.div`
  width: 35.03%;
  height: 110px;
  align-self: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Group6 = styled.div`
  width: 97.57%;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  box-sizing: border-box;
`;
const ItemNameGoesHere6 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const ItemNameGoesHere7 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
const ItemNameGoesHere8 = styled.div`
  width: 35.03%;
  align-self: flex-start;
  font-size: 14px;

  box-sizing: border-box;
`;
