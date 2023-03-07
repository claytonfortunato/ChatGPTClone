import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

  margin-top: 20px;

  h3 {
    font-weight: 700;
  }

  p {
    font-weight: 100;
    font-size: 15px;
  }
`;

export const Child = styled.div`
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #fff;
    color: #333;
  }
`;
