import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	min-height: calc(100vh - 60px);
	max-width: 940px;
	margin:0 auto;
	padding-top: 50px;

	
	h1 {
		font-size: 3rem;
		line-height: 3rem;
		font-weight: 900;
		/* margin-bottom:20px; */
	}
	p {
		font-size: 22px;
		line-height: 22px;
		text-align: justify;
  	text-justify: inter-word;
	}

	button {
		cursor: pointer;
		width: 180px;
		height: 180px;
		text-align: center;
		vertical-align: center;
		font-size: 40px;
		font-weight: bold;
		background-color: transparent;
		border-radius:50%;
		border:4px solid ${({ theme }) => theme.primaryColor};
		color:${({ theme }) => theme.primaryColor};
		text-transform: capitalize;

		transition: background-color ease-in-out .2s;

		&:hover {
			background-color: ${({ theme }) => theme.colors.gray['800']};
		}
	}
	
`;
