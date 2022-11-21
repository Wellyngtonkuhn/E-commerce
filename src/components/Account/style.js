import styled from "styled-components";

export const AccountSection = styled.section`
  width: 100%;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 24px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color.primaryColor};
    padding: 0;
    margin-top: -40px;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const DashBoardMenu = styled.div`
  flex-basis: 20%;
  height: 200px;

  display: flex;
  flex-direction: column;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: capitalize;
    color: #212121;
  }

  ul {
    list-style: none;
  }
`;

export const ContentDashBoard = styled.div`
  flex-basis: 80%;
  height: 200px;
  background-color: blue;
`;
