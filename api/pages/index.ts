import httpMethods, { ResponseType } from '../httpService'
import pertinentConfig from '../../pertinent.config'
import { Page } from '../../types/pages'

const pagesEndpoints = pertinentConfig.dashboard.endpoints.pages

export const create = (payload: Page): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.create
  return httpMethods.post(endpoint.path, payload)
}

export const getAll = (): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.getAll
  return httpMethods.get(endpoint.path)
}

export const getOneById = (id: string): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.getOneById
  endpoint.path = endpoint.path.replace(':id', id)
  return httpMethods.get(endpoint.path)
}

export const getOneByPath = (path: string): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.getOneByPath
  endpoint.path = endpoint.path.replace(':path', path)
  return httpMethods.get(endpoint.path)
}

export const updateOneById = (id: string, payload: Page): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.updateOneById
  endpoint.path = endpoint.path.replace(':id', id)
  return httpMethods.post(endpoint.path, payload)
}

export const deleteOneById = (id: string): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.updateOneById
  endpoint.path = endpoint.path.replace(':id', id)
  return httpMethods.post(endpoint.path)
}
