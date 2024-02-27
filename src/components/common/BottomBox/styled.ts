import styled from "@emotion/styled";

export const BottomBoxWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    left: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomBoxContainer = styled.div`
  margin: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20rem);
  border-radius: 1.6rem;
  padding: 1.6rem;
  column-gap: 1.2rem;
  img {
    width: 6rem;
    height: 100%;
    border-radius: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const BottomBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

export const BottomBoxBoldText = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const BottomBoxText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
`;
