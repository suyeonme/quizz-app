import styled, { createGlobalStyle } from 'styled-components';
import BgImg from './images/background.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BgImg});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  * {
    border-sizing: border-box;
    font-family: 'Poppins';
    font-weight: 900;
  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p,
	h1 {
		color: white;
		text-align: center;
	}

	h1 {
		font-size: 4rem;
		font-weight: 900;
	}

	.score {
		font-size: 2rem;
		margin: 0;
		margin-bottom: 1rem;
	}

	.start,
	.next {
		cursor: pointer;
		border-radius: 7px;
		padding: 0 40px;
		height: 40px;
		border: none;
		margin: 0 auto;
		margin-top: 20px;
	}

	.next {
		max-width: 200px;
	}

	.start {
		font-size: 1rem;
		padding: 0 60px;
		background: #ea2c62;
		color: white;
	}
`;
