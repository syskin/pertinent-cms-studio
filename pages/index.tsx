import { getSiteInformation } from '../api/site'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import 'tailwindcss/tailwind.css'

interface Page {
  name: string
  id: number
  path: string
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await getSiteInformation()
  return {
    props: {
      pages: result.data,
    },
  }
}

const Home = ({ pages }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      Home page
      {pages.map((page: Page) => {
        return <span key={page.id}>{page.name}</span>
      })}
    </div>
  )
}

export default Home
