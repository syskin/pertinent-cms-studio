import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { closeModal } from '../../../store/actions/modal'
import {
  ADD_CHILD_TAG_PAGE,
  ADD_PAGE,
  ADD_TAG_PAGE,
  DELETE_PAGE,
  EDIT_SITE,
  EDIT_TAG_PAGE,
  FormTypes,
} from '../../../store/types/modal'

import PageConfiguration from '../../form/PageConfiguration'
import DeletePage from '../../form/DeletePage'
import EditSite from '../../form/EditSite'
import { ADD_CHILD_TAG, ADD_TAG, EDIT_TAG, TAG_PAGE } from '../../../types/tags'
import TagConfiguration from '../../form/TagConfiguration'

const Modal: React.FC = () => {
  const dispatch = useDispatch()
  const { isOpen, type } = useSelector((state: RootState) => state.modal)

  const handleModalClose = (): void => {
    dispatch(closeModal())
  }

  const baseTransition = `transition-opacity duration-300`
  const baseModalWrapper = `fixed inset-0 bg-gray-200 z-20 bg-opacity-40 flex items-center ${baseTransition}`
  const modalWrapper = `rounded-lg shadow-lg mx-auto bg-white p-6 ${sizeModal(type)}`

  return (
    <div
      className={
        isOpen
          ? `visible opacity-100 ${baseModalWrapper}`
          : `invisible opacity-0 ${baseModalWrapper}`
      }
    >
      <div className={modalWrapper}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <span className="text-lg font-medium text-gray-700">{type}</span>
          </div>
          <button className="mr-0 ml-auto" onClick={handleModalClose}>
            X
          </button>
        </div>
        <div>{getForm({ type })}</div>
      </div>
    </div>
  )
}

const sizeModal = (type: FormTypes): string | null => {
  switch (type) {
    case ADD_PAGE:
      return `h-1/2 w-2/3`
    case DELETE_PAGE:
      return `h-1/3 w-1/2`
    case EDIT_SITE:
      return `h-4/5 w-4/5`
    default:
      return `h-3/5 w-4/5`
  }
}

interface formProps {
  type: FormTypes
}

const getForm: React.FC<formProps> = ({ type }) => {
  switch (type) {
    case ADD_PAGE:
      return <PageConfiguration type="create" />
    case DELETE_PAGE:
      return <DeletePage />
    case EDIT_SITE:
      return <EditSite />
    case EDIT_TAG_PAGE:
      return <TagConfiguration type={EDIT_TAG} wrapper_type={TAG_PAGE} />
    case ADD_TAG_PAGE:
      return <TagConfiguration type={ADD_TAG} wrapper_type={TAG_PAGE} />
    case ADD_CHILD_TAG_PAGE:
      return <TagConfiguration type={ADD_CHILD_TAG} wrapper_type={TAG_PAGE} />
    default:
      return null
  }
}

export default Modal
