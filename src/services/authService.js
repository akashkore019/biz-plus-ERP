import axiosClient from '../api/axiosClient'

export async function login(email, password){
  const res = await axiosClient.post('/auth/login', { email, password })
  return res.data
}

export async function logout(){
  // implement logout
}
