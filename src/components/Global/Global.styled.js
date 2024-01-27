import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding: 0 24px;
  margin: 0 auto;
  margin-top: 104px;

  @media screen and (max-width: 319px) {
    width: 100%;
  }

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin-top: 164px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;

    margin-top: 120px;
    padding: 0 80px;
  }
`;
