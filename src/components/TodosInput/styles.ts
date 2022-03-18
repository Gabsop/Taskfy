import styled from "styled-components";

export const TodoInput = styled.input`
  outline: none;
  margin-top: 15px;
  width: 400px;
  height: 50px;
  border-radius: 25px;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 30px; 
  font-size: 20px;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 1;

  :focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;    
  }

  :active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
}
`;

export const InputButton = styled.button`
  outline: none;
  border: none;
  background-color: white;
  font-weight: bold;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  :hover {
    background-color: #304ffe;    
    color: white;          
  }
`;