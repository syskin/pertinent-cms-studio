import Head from 'next/head'
import MenuHeader from '../../components/interface/Menu/MenuHeader'
import PageItems from '../../components/pages/PageItems'
import Modal from '../../components/interface/Modal'

import { useDispatch } from 'react-redux'
import { openModal } from '../../store/actions/modal'
import { ADD_PAGE } from '../../store/types/modal'
import { getAllPages } from '../../store/actions/pages'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Studio: React.FC = () => {
  const dispatch = useDispatch()

  const handleModalAddPage = (): void => {
    dispatch(openModal(ADD_PAGE))
  }

  const handleRefreshPages = (): void => {
    dispatch(getAllPages())
  }

  const baseMainContentWrapper = `flex-1 min-h-screen transform duration-300 pt-12`
  return (
    <>
      <Head>
        <title>Pertinent CMS - Studio</title>
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

      <main className={baseMainContentWrapper}>
        <MenuHeader />
        <div className="container w-4/5 md:w-2/3 lg:w-1/2 mx-auto">
          <div className="flex flex-row items-center">
            <div className="pt-4">
              <h2 className="text-2xl font-bold">Pages</h2>
              <p>Description of the page section</p>
            </div>
            <div className="mr-0 ml-auto">
              <button className="btn bg-gray-50 hover:bg-gray-100 h-8" onClick={handleModalAddPage}>
                Add
              </button>
              <button className="btn bg-gray-50 hover:bg-gray-100 h-8" onClick={handleRefreshPages}>
                Refresh
              </button>
            </div>
          </div>
          <PageItems />
        </div>
        <Modal />
      </main>
    </>
  )
}

export default Studio
