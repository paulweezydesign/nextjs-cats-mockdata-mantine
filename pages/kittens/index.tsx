import useSWR from 'swr';
import KittensComponent from '../../components/Kittens';
import type { Kittens } from '../../interfaces/kittens';
import Navbar from '../../components/Navbar';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function KittensPage() {
  const { data, error, isLoading } = useSWR<Kittens[]>('/api/kittens', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <ul>
        {data.map((p) => (
          <KittensComponent key={p.id} kittens={p} />
        ))}
      </ul>
    </>
  );
}
