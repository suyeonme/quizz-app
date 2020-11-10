import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 500px;
	background: white;
	border-radius: 7px;
	padding: 20px;
	text-align: center;

	p {
		font-size: 1rem;
		color: black !important;
	}
`;

type BtnWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const BtnWrapper = styled.div<BtnWrapperProps>`
	transition: all 0.3s ease;

	&:hover {
		opacity: 0.8;
	}

	button {
		font-size: 1rem;
		cursor: pointer;
		user-select: none;
		width: 100%;
		height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
			correct ? '#8db596' : !correct && userClicked ? '#ce6262' : 'white'};
    border-radius: 7px;
    border: 1px solid black;
`;
