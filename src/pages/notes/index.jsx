/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from 'next/link';

export default function NotePage() {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}));
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>My Notes</h1>

      <Flex sx={{justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {notes.map(note => (
          <div key={note.id} sx={{width: '33%', p: 2}}>
            <Link href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Flex>
    </div>
  );
}