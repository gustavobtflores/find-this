import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  width: 360px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${(props) => props.theme.palette.background};
`;

export const Search = styled.section`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5); */
`;

export const Logo = styled.img`
  margin-bottom: 1rem;
`;

export const Map = styled.div`
  width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 1rem;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.palette.text};
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin: 16px 0;
`;

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.05em;
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.palette.title};
  text-transform: none;
  line-height: 1.25em;
  font-size: 24px;
  font-weight: 600;
`;

export const ModalContent = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.05em;
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.palette.text};
  text-transform: none;
  font-weight: 400;
  line-height: 19px;
  font-size: 16px;
`;

export const ModalOpenNow = styled.p`
  color: ${(props) => (props.openNow ? "#90ee90" : "#d93025")};
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: 0.05em;
  font-family: ${(props) => props.theme.font.regular};
  text-transform: none;
  font-weight: 400;
  line-height: 19px;
  font-size: 16px;
`;
