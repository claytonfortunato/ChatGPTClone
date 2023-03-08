import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h3 {
    background-color: #fff;
    border: 1px solid #fff;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
`;
