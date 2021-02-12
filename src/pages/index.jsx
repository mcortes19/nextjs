import React from 'react';
import Link from 'next/link';


export default function IndexPage() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/notes">
        <a>
          Go to note index
        </a>
      </Link>
    </>
    );
}