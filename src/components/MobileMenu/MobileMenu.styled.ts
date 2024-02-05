import styled from '@emotion/styled';

export const Navigation = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  width: 100%;
  overflow: scroll;
  background-color: #ffffff;

  & li {
    border-bottom: 1px solid #eae9e9;
  }

  & > ul {
    display: block;
  }

  & > nav {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
