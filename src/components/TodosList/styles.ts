import styled from "styled-components";

export const TodosCardGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;  
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 250px);
  gap: 20px;  
  margin-top: 20px;
`;