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
	position: relative;



	button {
		padding: 12px 24px;
		border-radius:6px;
		border:0;
		font-size:18px;
		font-weight: bold;
		cursor:pointer;
		background-color: ${({ theme }) => theme.primaryColor};
		color: #fff;
		transition: color ease-in-out .2s;

		display: flex;
		align-items: center;
		justify-content: space-between;
		

		svg {
			margin-right: 10px;
		}

		&:disabled{
			background-color: ${({ theme }) => theme.colors.gray[400]} !important;
			cursor: not-allowed;
		}
		&:hover {
			background-color: ${({ theme }) => theme.primaryDarkColor};
		}
	}


	footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0;
		margin-top: 5px;

		section {
			display: flex;
		}

		width: 100%;

		button {
			margin-left: 5px;
		}

		span {
			font-size:22px;
		}
	}

`;


export const LoadingContainer = styled.section`
	display: flex;
	flex-direction:column;
	width: 100%;
	align-items: center;
	svg {
		margin:10px 0;
	}

`;

