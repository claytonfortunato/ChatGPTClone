import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    outline: none;
    margin: 20px;
  }

  .result-image {
    margin-top: 20px;
    width: 350px;
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
