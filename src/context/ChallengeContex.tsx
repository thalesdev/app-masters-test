import { createContext, ReactNode, useState } from "react";

type ChallengeState = 'play' | 'reset' | 'stop';

interface ChallengeContextProps {
	play: (challenge: number) => void;
	reset: (challenge: number) => void;
	stop: (challenge: number) => void;
	challenge: number;
	state: ChallengeState;
}

interface ChallengeProviderProps {
	children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengeContextProps);


export function ChallengeProvider({ children }: ChallengeProviderProps) {
	const [challenge, setChallenge] = useState<number | undefined>()
	const [state, setState] = useState<ChallengeState | undefined>()

	function play(challenge: number) {
		if (challenge) {
			setState('stop')
		}
		setChallenge(challenge)
		setState('play')
	}

	function stop(challenge: number) {
		setChallenge(challenge)
		setState('stop')
	}

	function reset(challenge: number) {
		setChallenge(challenge)
		setState('reset')
	}


	return (
		<ChallengeContext.Provider value={{ challenge, state, play, stop, reset }}>
			{children}
		</ChallengeContext.Provider>
	)
}