import { NextApiResponse, NextApiRequest } from 'next'
import { kittens } from '../../../data'
import { Kittens } from '../../../interfaces/kittens'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Kittens[]>
) {
  return res.status(200).json(kittens)
}
