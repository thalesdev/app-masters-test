import Link from 'next/link'
import { MdSchedule } from 'react-icons/md';

import { Container } from './styles';

export function NavBar() {
	return (
		<Container>
			<Link href="/" passHref>
				<h1 style={{ cursor: 'pointer' }}>Speed Typing</h1>
			</Link>
			{/* <button>
				<MdSchedule />
				Ver Histórico
			</button> */}
		</Container>
	)
}