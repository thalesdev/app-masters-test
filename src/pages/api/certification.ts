
import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from '../../services/chromium'
import { generateCertificationHTML } from '../../services/certification'

const isDev = !process.env.AWS_REGION
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const query = req.query

		const wpm = String(query.wpm)
		const time = String(query.time)

		if (!wpm || !time) {
			throw new Error('Bad Request');
		}

		const html = generateCertificationHTML(wpm, time)
		if (isHtmlDebug) {
			res.setHeader('Content-Type', 'text/html')
			res.end(html)

			return
		}

		const file = await getScreenshot(html, isDev)

		res.statusCode = 200

		res.setHeader('Content-Type', `image/png`)
		res.setHeader(
			'Cache-Control',
			'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
		)

		res.end(file)
	} catch (e) {

		res.statusCode = 500
		res.setHeader('Content-Type', 'text/html')
		res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>')
		console.error(e)
	}
}