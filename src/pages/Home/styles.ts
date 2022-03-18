import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: #304ffe;
  color: white;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 0px 20px 0px;
`;

export const UserCardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;
`;