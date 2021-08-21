import httpMethods, { ResponseType } from '../httpService'
import pertinentConfig from '../../pertinent.config'
import { Tag } from '../../types/tags'

const tagsEndpoints = pertinentConfig.dashboard.endpoints.tags

export const getByFilter = (filter: any): Promise<ResponseType> => {
  const endpoint = tagsEndpoints.get

  let stringifiedFilter = ``

  // Should be refacorize as utils function
  Object.keys(filter).map((key) => {
    stringifiedFilter += stringifiedFilter.length > 0 ? `&` : ``
    if (filter[key]) {
      stringifiedFilter += `${key}=${filter[key]}`
    }
  })

  return httpMethods.get(`${endpoint.path}?${stringifiedFilter}`)
}

export const create = (payload: Tag): Promise<ResponseType> => {
  const endpoint = tagsEndpoints.create
  return httpMethods.post(endpoint.path, payload)
}

export const updateOneById = (id: number, payload: Tag): Promise<ResponseType> => {
  const endpoint = { ...tagsEndpoints.updateOneById }
  endpoint.path = endpoint.path.replace(':id', id.toString())
  return httpMethods.put(endpoint.path, payload)
}

export const deleteOneById = (id: number): Promise<ResponseType> => {
  const endpoint = { ...tagsEndpoints.deleteOneById }
  endpoint.path = endpoint.path.replace(':id', id.toString())
  return httpMethods.delete(endpoint.path)
}
