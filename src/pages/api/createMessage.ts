import { NextApiRequest, NextApiResponse } from 'next'
import config from '../../../config.json'

export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {
  const { messages } = req.body
  const apiKey = process.env.OPENAI_API_KEY

  const url = config.url

  const body = JSON.stringify({
    messages,
    model: 'gpt-4o-mini',
    stream: false
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body
    })
    const data = await response.json()
    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
