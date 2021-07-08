import httpMethods, { ResponseType } from '../httpService'
import pertinentConfig from '../../pertinent.config'

const pagesEndpoints = pertinentConfig.dashboard.endpoints.pages

export const getAll = (): Promise<ResponseType> => {
  const endpoint = pagesEndpoints.getAll
  return httpMethods.get(endpoint.path)
}
