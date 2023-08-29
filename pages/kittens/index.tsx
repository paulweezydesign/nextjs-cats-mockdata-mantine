import useSWR from 'swr';
import KittensComponent from '../../components/Kittens';
import type { Kittens } from '../../interfaces/kittens';
import Navbar from '../../components/Navbar';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
import {Flex} from '@mantine/core'
export default function KittensPage() {
  const { data, error, isLoading } = useSWR<Kittens[]>('/api/kittens', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <>
      <ul className='list-none'>
      <Flex
      mih={50}
     
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
        {data.map((p) => (
        
          
          <KittensComponent key={p.id} kittens={p} />
      
        ))}
        </Flex>
      </ul>
    </>
  );
}
