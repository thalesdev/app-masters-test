import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	 * {
    margin:0;
    padding:0;
    box-sizing:border-box;
		font-family: 'Roboto', sans-serif;
   }

	 body,
	 html,
	 .__next{
		background-color:  ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.primaryTextColor};
		width: 100%;
	 }

	 body {
    padding-top: 60px;
  }

	// animações

	.spin {
    animation:spin 0.5s linear infinite;
  }

  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }


`;