type ChallengeEntry = string | { content: string; url: string }

function removeHTMLTags(text: string) {
	return text.replace(/(<([^>]+)>)/gm, '')
}

export function compare(textA: ChallengeEntry, textB: string) {
	const pattern = /(\r\n|\n|\r)/gm;
	const goal = typeof textA === "string" ? textA : textA.content;
	return removeHTMLTags(goal).replace(pattern, '') === removeHTMLTags(textB).replace(pattern, '')
}

export function evalGrossWPM(text: string, timeInMinutes: number) {
	const rawText = removeHTMLTags(text).replace(/(\r\n|\n|\r)/gm, '')
	return Math.round((rawText.length / 2) / timeInMinutes)
}