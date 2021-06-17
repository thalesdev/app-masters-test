import { useContext, useEffect, useRef, useState } from 'react'
import { useTimer } from 'use-timer'
import { ChallengeContext } from '../../context/ChallengeContex'
import { useDebounce } from '../../hooks/useDebounce'
import { compare, evalGrossWPM } from '../../utils/text'
import { Container } from './styles'

type ChallengeImageLike = {
	url: string,
	content: string
}

interface ChallengeProps {
	goal: string | ChallengeImageLike;
	id: number;
	onComplete: (time: number, wpm: number) => void;
}


export function Challenge({ goal, onComplete, id }: ChallengeProps) {

	const [text, setText] = useState('')
	const [completed, setCompleted] = useState<undefined | boolean>()
	const { time, start, pause, reset } = useTimer();
	const textareaRef = useRef<HTMLTextAreaElement>()

	const { state, challenge, stop } = useContext(ChallengeContext)

	useEffect(() => {
		if (state && challenge === id) {
			switch (state) {
				case 'play':
					start()
					break
				case 'stop':
					pause()
					break
				default:
					reset()
					break
			}
		}
	}, [state, challenge])

	useDebounce(() => {
		if (text) {
			const completed = compare(goal, text)
			setCompleted(completed)
			if (completed) {
				stop(id)
				const timeInMinutes = time / 60
				const WPM = evalGrossWPM(text, timeInMinutes)
				onComplete(time, WPM)
			}
		}
	}, [text], 250)


	return (
		<Container>
			{typeof goal === "string" ? <section dangerouslySetInnerHTML={{ __html: goal }} /> : (
				<figure>
					<img src={goal.url} alt="Challenge" />
				</figure>
			)}
			<textarea
				onChange={e => setText(e.target.value)}
				placeholder="Digite o texto indicado acima"
				ref={textareaRef}
				className={typeof completed !== "undefined" && !completed ? 'invalid' : ''}
			/>
			{typeof completed !== "undefined" && !completed && (
				<span>Texto digitado inválido</span>
			)}
		</Container>
	)
}