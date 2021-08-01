import httpMethods, { ResponseType } from '../httpService'
import pertinentConfig from '../../pertinent.config'
import { Tag } from '../../types/tags'

const tagsEndpoints = pertinentConfig.dashboard.endpoints.tags

export const create = (payload: Tag): Promise<ResponseType> => {
  const endpoint = tagsEndpoints.create
  return httpMethods.post(endpoint.path, payload)
}

export const updateOneById = (id: string, payload: Tag): Promise<ResponseType> => {
  const endpoint = { ...tagsEndpoints.updateOneById }
  endpoint.path = endpoint.path.replace(':id', id)
  return httpMethods.put(endpoint.path, payload)
}

export const deleteOneById = (id: string): Promise<ResponseType> => {
  const endpoint = { ...tagsEndpoints.deleteOneById }
  endpoint.path = endpoint.path.replace(':id', id)
  return httpMethods.delete(endpoint.path)
}
