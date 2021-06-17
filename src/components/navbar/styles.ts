import styled from 'styled-components';

export const Container = styled.nav`
	width: 100vw;
	height: 60px;
	padding: 0 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	
	h1 {
		color: ${({ theme }) => theme.secondaryColor};
		/* font-size: 40px; */
	}

	button {
		padding: 12px 24px;
		border-radius:6px;
		border:0;
		font-size:18px;
		font-weight: bold;
		cursor:pointer;
		background-color: ${({ theme }) => theme.colors.gray['700']};
		color: #fff;
		transition: color ease-in-out .2s;

		display: flex;
		align-items: center;
		justify-content: space-between;
		

		svg {
			margin-right: 10px;
		}


		&:hover {
			background-color: ${({ theme }) => theme.colors.gray['600']};
		}
	}
`;
