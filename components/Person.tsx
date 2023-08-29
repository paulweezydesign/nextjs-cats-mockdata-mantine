import Link from 'next/link'
import { Person } from '../interfaces'

type PersonProps = {
  person: Person
}

export default function PersonComponent({ person }: PersonProps) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
      <img src={person.image} alt='kitten pic' />
      <h2>{person.name}</h2>
      </Link>
    </li>
  )
}
