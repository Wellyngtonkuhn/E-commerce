import styled from "styled-components";

export const Input = styled.input`
  border: unset;
  border-bottom: 1px solid ${({ theme }) => theme.color.primaryColor};
  background-color: transparent;
  padding: 0.7rem;

  :focus {
    outline: none;
  }
`;
