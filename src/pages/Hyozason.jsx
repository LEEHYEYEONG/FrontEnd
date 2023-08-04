import styled from "styled-components";

const Hyozason = () => {
  return (
    <>
      <Title>00구의 도움 요청서</Title>
      <ButtonContainer>
        <Button>택시 예약</Button>
        <Button>버스 예약</Button>
        <Button>기차 예약</Button>
        <Button>버스 예약</Button>
        <Button>택시 예약</Button>
        <Button>기차 예약</Button>
      </ButtonContainer>
    </>
  );
};

const Title = styled.div`
  font-size: 26px;
  text-align: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 22px;
  background-color: #519872;
  border: none;
  border-radius: 10px;
  width: 500px;
  height: 80px;
  color: white;
  margin-bottom: 20px;
`;

export default Hyozason;
