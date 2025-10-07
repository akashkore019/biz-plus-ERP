import axiosClient from '../api/axiosClient'

export function fetchProducts(){
  return axiosClient.get('/products')
}
