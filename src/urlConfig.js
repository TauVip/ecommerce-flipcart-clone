const baseUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:2000'
    : 'https://flipcart-rest-server.herokuapp.com'

export const api = `${baseUrl}/api`
export const generatePublicUrl = fileName => `${baseUrl}/public/${fileName}`
