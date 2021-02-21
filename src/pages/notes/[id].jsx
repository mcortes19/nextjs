/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function NotePage({note}) {
  // /** Functionality */

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Note: {note ? note.title : 'not'} </h1>
    </div>
  );
}

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`${process.env.APP_URL}/api/notes/${params.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return { props: {} };
  }

  const {data} = await response.json();

  if (data) {
    return {
      props: {note: data}
    }
  }
}
