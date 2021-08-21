import { GetStaticPaths, GetStaticProps } from 'next'
import { getOneBySlug } from '../api/pages'
import { Page } from '../types/pages'

import TagsTree from '../components/tagsTree'
import { buildTagsTree } from '../services/tagsManager'

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
  page: Page
}

const Route: React.FC<RouteProps> = ({ page }) => {
  const tagsTree = buildTagsTree(page?.tags)
  return (
    <div>
      <TagsTree isStudio={false} tagsTree={tagsTree} />
    </div>
  )
}
export default Route
