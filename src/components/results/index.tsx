import Link from 'next/link'
import { Container } from './styles'
interface ResultProps {
	times: number[]
	wpms: number[]
}

const avg = (array: number[]) => Math.round(array.reduce((p, c) => p + c, 0) / array.length)

export function Results({ times, wpms }: ResultProps) {
	const avgTime = avg(times)
	const avgWpms = avg(wpms)


	function handleDownload() {
		window.location.assign(`/api/certification.png?wpm=${avgWpms}&&time=${avgTime}`);
	}


	return (
		<Container>
			<h3>Resultados</h3>
			<h1>
				<span>{`${avgWpms} Wpm `}</span>
				médio
			</h1>
			<h1>
				<span>{`${avgTime}s `}</span>
				médio
			</h1>
			<section>
				<button onClick={handleDownload}>Baixar Certificado</button>
				<Link href="/">
					<button >Inicio</button>
				</Link>
			</section>
		</Container>
	)
}