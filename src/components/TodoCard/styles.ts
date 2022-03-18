import styled from "styled-components";

export const TodoTitle = styled.p`
  font-size: 0.9em;
  margin: 10px;
  font-weight: bold;
`;

export const TodoActions = styled.div`
  display: flex;
  margin: 10px;
`;

export const Icon = styled.div`  
  margin: 0px 3px 0px 3px;
`;

export const TodoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  width: 100%;
  height: 90px;
  background-color: white;    
  cursor: pointer;  
  border-radius: 7px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #304ffe;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    ${TodoTitle}, ${TodoActions}, p {
      color: white;      
    }
  }
`;

  