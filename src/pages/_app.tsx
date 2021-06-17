import { ThemeProvider } from "styled-components"
import { NavBar } from "../components/navbar"
import { ChallengeProvider } from "../context/ChallengeContex"
import { DefaultTheme } from "../themes"
import { GlobalStyle } from "../themes/GlobalStyle"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={DefaultTheme}>
				<ChallengeProvider>
					<GlobalStyle />
					<NavBar />
					<Component {...pageProps} />
				</ChallengeProvider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
