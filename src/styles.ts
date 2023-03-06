import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 200px;
    height: 20px;
    margin: 20px;
  }
`;

export const Header = styled.h1`
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  cursor: pointer;
`;
