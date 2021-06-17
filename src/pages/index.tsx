import Head from 'next/head'
import Link from 'next/link'

import { Container } from './_home'

export default function Home() {
	return (
		<>
			<Head>
				<title>React Speed Typing</title>
			</Head>
			<Container>
				{/* modificar o heading e verificar o português */}
				<h1>Teste sua velocidade de digitação</h1>
				<p>Sua velocidade digitação será medida,
				assim que apertar o botão iniciar.
				Terá um campo com um texto aleatório e um campo para digitar assim que acabar de digitar
				o botão de concluir irá ficar disponivel e assim mostrar os resultados
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
