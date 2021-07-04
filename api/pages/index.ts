import { apiClient } from '../httpService'
import { ResponseType } from '../httpService'

export const getAllPages = (filter: Record<string, any> | null): Promise<ResponseType> => {
  const method = 'get'
  const url = '/'
  return apiClient({ method, url, data: filter })
}
