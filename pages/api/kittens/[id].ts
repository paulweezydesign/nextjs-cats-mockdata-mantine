import { NextApiRequest, NextApiResponse } from 'next'
import { kittens } from '../../../data'
import type { Kittens, ResponseError } from '../../../interfaces/kittens'

export default function kittensHandler(
  req: NextApiRequest,
  res: NextApiResponse<Kittens | ResponseError>
) {
  const { query } = req
  const { id } = query
  const kitten = kittens.find((p) => p.id === id)

  // User with id exists
  return kitten
    ? res.status(200).json(kitten)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}
