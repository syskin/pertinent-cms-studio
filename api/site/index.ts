import { apiClient } from '../httpService'
import { ResponseType } from '../httpService'

export const getSiteInformation = (): Promise<ResponseType> => {
  const method = 'get'
  const url = '/pertinent-pages'
  return apiClient({ method, url })
}
