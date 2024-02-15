import styled from '@emotion/styled';

export const Navigation = styled.div`
  position: fixed;
  z-index: 9999;
  top: 48px;
  left: 0;
  width: 100%;
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
