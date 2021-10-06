import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
`;

export const Container = styled.aside`
	background-color: ${(props) => props.theme.palette.background};
	width: 360px;
	height: 100vh;
	overflow-y: auto;
`;

export const Search = styled.section`
	display: flex;
	background-color: #ffffff;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
`;

export const Logo = styled.img`
	margin-bottom: 1rem;
`;

export const Map = styled.div`
	background-color: red;
	width: 500px;
`;

export const CarouselTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.palette.text};
`;
