/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Link from 'next/link';


export default function IndexPage({content}) {
  /** Styles */
  const pageContainerStyles = {
    variant: 'containers.page',
    alignItems: 'center',
    height: '100%'
  };
  const titleStyles = {
    fontSize: 8,
    my: 0,
  };

  return (
    <div sx={{ height: `calc(100vh - 60px)`}}>
      <Flex sx={pageContainerStyles}>
        <h1 sx={titleStyles}>{content.title}</h1>
      </Flex>
    </div>
  );
}

export async function getStaticProps({params}) {
  return {
    props: {
      content: {
        title: 'This is a really dope note taking app.'
      }
    }
  }
}