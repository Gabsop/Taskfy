import styled from "styled-components";

export const UserName = styled.p`
  font-size: 1.0em;
  margin: 10px;
  font-weight: bold;
`;

export const UserCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 0px 15px 15px;
  width: 100%;
  height: 100%;
  background-color: white;  
  margin-top: 30px;
  cursor: pointer;
  margin: 10px;
  border-radius: 7px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  .user-icon {
    transition: all 0.2s ease-in-out;
    color: #304ffe;
  }

  .info-text {
    font-weight: bold;
    font-size: 0.9em;
    margin-bottom: 5px;    
  }

  :hover {
    background-color: #304ffe;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    ${UserName}, .user-icon, p {
      color: white;      
    }
  }
  `;

export const UserInfoPrimary = styled.div`
  display: flex;  
  align-items: center;
  justify-content: left;
`;

export const UserInfoSecondary = styled.div`
  display: flex;  
  align-items: left;
  justify-content: center;
  flex-direction: column;  
`;