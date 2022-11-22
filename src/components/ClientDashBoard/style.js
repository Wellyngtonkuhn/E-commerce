import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;
  padding: 1rem;
  
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 0;
  }

  p {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: capitalize;
    color: #212121;
    padding: .4rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;
