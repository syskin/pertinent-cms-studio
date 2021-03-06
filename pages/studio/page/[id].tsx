import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import { RootState } from '../../../store'
import { getActivePage } from '../../../store/actions/pages'

import Modal from '../../../components/interface/Modal'
import MenuHeader from '../../../components/interface/Menu/MenuHeader'
import Sidebar from '../../../components/interface/Sidebar'
import TagsTree from '../../../components/tagsTree'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getTags } from '../../../store/actions/tags'
import { TAG_PAGE } from '../../../types/tags'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { params: context.params },
  }
}

const Page: React.FC = ({ params }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useDispatch()
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const { tree } = useSelector((state: RootState) => state.tags)

  useEffect(() => {
    dispatch(getActivePage(params.id))
    setIsPageLoaded(true)
  }, [dispatch, params.id])

  const { isSidebarOpen } = useSelector((state: RootState) => state.sidebar)
  const { activePage } = useSelector((state: RootState) => state.pages)

  useEffect(() => {
    if (isPageLoaded && activePage && activePage.id) {
      dispatch(
        getTags({
          wrapperType: TAG_PAGE,
          wrapperId: activePage.id,
        })
      )
    }
  }, [dispatch, activePage, isPageLoaded])

  const baseMainContentWrapper = `flex-1 min-h-screen transform duration-300 mb-52 pt-12`
  return (
    <>
      <Head>
        <title>Pertinent CMS - Studio page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <main className="flex">
        <MenuHeader />
        <div
          className={
            isSidebarOpen ? `${baseMainContentWrapper} pr-72` : `${baseMainContentWrapper}`
          }
        >
          <TagsTree isStudio={true} tagsTree={tree} />
        </div>
        <Sidebar />
        <Modal />
      </main>
    </>
  )
}

export default Page
