import Head from 'next/head'
import Image from 'next/image'

import Editor from '@monaco-editor/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pertinent CMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Monaco editor test
        <Editor
          height="90vh"
          defaultLanguage="css"
          defaultValue=""
          options={{
            lineNumbers: false,
            contextmenu: false,
            minimap: {
              enabled: false,
            },
          }}
        />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
