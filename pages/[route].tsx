import { GetStaticPaths, GetStaticProps } from 'next'
import { getOneBySlug } from '../api/pages'

export const getStaticProps: GetStaticProps = async (context) => {
  const page = await getOneBySlug(context?.params?.route)
  return {
    props: {
      slug: context?.params?.route,
      page: page.data,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

interface RouteProps {
  slug: string
}

const Route: React.FC<RouteProps> = ({ slug }) => {
  return <div>{slug}</div>
}
export default Route
