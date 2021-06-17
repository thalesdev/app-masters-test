import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/home'

export default function Home() {
	return (
		<>
			<Head>
				<title>React Speed Typing</title>
			</Head>
			<Container>
				<h1>Teste sua velocidade de digitação</h1>
				<p>Sua velocidade digitação será medida,
				assim que apertar o botão iniciar.
				Aparecerá alguns desafios para completar, eles incluemincluem textos e imagens. Ao finalizar irá aparecer o botão de concluir para adiquirir seu certificado digital.
				</p>
				<Link href="/test">
					<button>
						Iniciar teste
					</button>
				</Link>
			</Container>

		</>
	)
}
