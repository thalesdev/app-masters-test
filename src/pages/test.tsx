import { useContext, useEffect, useState } from "react"
import Head from 'next/head'
import { ImSpinner8 } from 'react-icons/im'

import { Container, LoadingContainer } from '../styles/test'
import { Challenge } from "../components/challenge";
import { ChallengeContext } from "../context/ChallengeContex";
import challenges from '../utils/challenges'
import { Results } from "../components/results";


export default function Test() {
	const [stage, setStage] = useState(0)
	const [challengeIndex, setChallengeIndex] = useState(0)
	const [wpms, setWPMS] = useState<number[]>([])
	const [times, setTimes] = useState<number[]>([])
	const [canNext, setCanNext] = useState(false)
	const [canFinish, setCanFinish] = useState(false)

	const { play, state, stop } = useContext(ChallengeContext)



	useEffect(() => {
		const timer = setTimeout(() => {
			setStage(1)
			play(0)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (challengeIndex) {
			play(challengeIndex)
		}
	}, [challengeIndex])



	function handleCompleteChallenge(time: number, wpm: number) {
		setTimes(times => [...times, time])
		setWPMS(wpms => [...wpms, wpm])
		if (challengeIndex + 1 <= challenges.length - 1) {
			setCanNext(true)
		} else {
			setCanNext(false)
			setCanFinish(true)
		}
	}

	function handleNextChallenge(event) {
		event.preventDefault()
		setChallengeIndex(index => index + 1)
		setCanNext(false)
	}

	// function handlePause(event) {
	// 	event.preventDefault()
	// 	stop(challengeIndex)
	// }


	// function handleContinue(event) {
	// 	event.preventDefault()
	// 	play(challengeIndex)
	// }

	function handleCompleteAllChallenges(event) {
		event.preventDefault()
		setStage(2)
	}



	return (
		<>
			<Head>
				<title>React Speed Typing</title>
			</Head>
			<Container>
				{stage === 0 && (
					<LoadingContainer>
						<h2>Carregando teste...</h2>
						<ImSpinner8 className="spin" />
					</LoadingContainer>
				)}
				{stage === 1 && (
					<>
						{/* {state === 'stop' && <h2>Pausado...</h2>} */}
						{challenges.map(({ challenge, key, code }) => (
							key === challengeIndex &&
							<Challenge key={key} id={key} goal={challenge} code={code} onComplete={handleCompleteChallenge} />
						))}
						<footer>
							<span>
								{`${challengeIndex + 1} de ${challenges.length}`}
							</span>
							<section>
								{/* {!paused && <button onClick={handlePause}>Pausar</button>}
								{paused && <button onClick={handleContinue}>Continuar</button>} */}
								{canNext && <button onClick={handleNextChallenge}>Avançar</button>}
								{canFinish && <button onClick={handleCompleteAllChallenges}>Concluir</button>}
							</section>
						</footer>
					</>
				)}

				{stage === 2 && (
					<Results wpms={wpms} times={times} />
				)}
			</Container>
		</>
	)
}