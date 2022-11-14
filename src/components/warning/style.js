import styled from "styled-components";

export const WarningContainer = styled.div`
  width: 100%;
  height: 2rem;

  position: fixed;
  top: 0;
  z-index: 1;

  background-color: red;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 0;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    background-color: #fafafa;
    color: #000;

    padding: 0.3rem 1.2rem;
    margin-left: 1rem;

    font-size: 1.1rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }
`;
