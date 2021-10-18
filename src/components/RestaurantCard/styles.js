import styled from "styled-components";

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.palette.background};
    border-left-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.palette.text};
  font-size: 24px;
  font-weight: 600;
  font-weight: 1.25em;
  margin-bottom: 10px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.font.regular};
  color: ${(props) => props.theme.palette.text};
  font-size: 12px;
  font-weight: 1.25em;
  margin-bottom: 10px;
`;

export const RestaurantPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? "block" : "none")};
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;
