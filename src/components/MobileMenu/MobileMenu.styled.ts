import styled from '@emotion/styled';

export const Navigation = styled.div`
  position: fixed;
  top: 32px;
  left: 0;
  width: 100%;
  overflow: scroll;
  background-color: #ffffff;

  & li {
    border-bottom: 1px solid rgb(234, 233, 233);
  }

  & a {
    gap: 10px;
    padding: 32px;
    width: 100%;
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
