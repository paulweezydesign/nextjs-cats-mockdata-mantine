import Link from 'next/link'
import { Kittens } from '../interfaces/kittens'

type KittensProps = {
  kittens: Kittens
}

export default function KittensComponent({ kittens }: KittensProps) {
  return (
    <li>
      <Link href="/kittens/[id]" as={`/kittens/${kittens.id}`}>
      <img src={kittens.image} alt='kitten pic' />
      <h2>{kittens.name}</h2>
      </Link>
    </li>
  )
}
