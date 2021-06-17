import styled from 'styled-components';

export const Container = styled.div`
	min-width: 940px;
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		font-size:48px;
		margin-bottom: 10px;
	}

	h1 {
		margin: 40px 0;
		font-size: 36px;

		span{
			font-size: 68px;
			color: ${({ theme }) => theme.primaryColor}
		}
	}

	section {
		display:flex;
		button {
			margin-right:10px;
		}
	}

`;
