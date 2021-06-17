import styled from 'styled-components';

export const Container = styled.div`
	min-width: 940px;

	p {
		margin-bottom:10px;
		font-size:18px;
	}

	textarea {
		margin:20px 0;
		background-color: transparent;
		color:white;
		width: 100%;
		min-height: 200px;
		padding: 12px;
		border:2px solid ${({ theme }) => theme.secondaryDarkColor};
		border-radius:6px;
		outline-color: ${({ theme }) => theme.primaryColor};
		font-size: 20px;
		max-lines: 10;
		line-height: 20px;
		background-color: ${({ theme }) => theme.colors.gray[800]};

		&.invalid {
			border-color: red;
		}
	}
	
	figure {
		text-align:center;
		img {
			max-width: 380px;
			height: auto;
		}
	}
`;
