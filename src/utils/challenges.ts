type ChallengeImageLike = { url: string, content: string }
type ChallengeType = string | ChallengeImageLike

const challenges: { challenge: ChallengeType, key: number, code?: boolean }[] = [
	{
		key: 0,
		challenge: `<p>Parafraseando e traduzindo livremente Dan Abramov, um erro JavaScript em uma parte da interface não deveria quebrar todo seu App.</p><p>Para solucionar este problema, React 16 introduz um novo conceito de um "error boundary". Error boundaries são componentes React que interceptam erros de JavaScript em qualquer lugar de sua árvore de componentes, disponibilizando os e oferecendo uma fallback UI, ou seja, uma interface auxiliar para ser exibida quando há um erro em sua árvore de componentes.</p>`
	},
	{
		key: 1,
		challenge: `<div>\n\t<p>You clicked {count} times<p>\n\t<button onClick={() => setCount(count + 1)}>\n\t\tClick me\n\t<button>\n<div>`,
		code: true
	},
	{
		key: 2,
		challenge: {
			url: 'https://i.stack.imgur.com/TWror.png',
			content: 'some text'
		}
	}
]

export default challenges;