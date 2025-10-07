import axiosClient from './axiosClient'

export function fetchUsers(){
  return axiosClient.get('/users')
}

export function fetchUser(id){
  return axiosClient.get(`/users/${id}`)
}
