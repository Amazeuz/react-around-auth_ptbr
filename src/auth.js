export const BASE_URL = 'https://register.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return res;
    })
    .catch(err => {
      console.log(err)
    })
};
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    //.then(vrau => console.log('autorização sendo chamada'))
    .then((res => res.json()))
    .then((data) => {
      console.log(data)
      if (data.token) {
        console.log('DEU CERTO')
        localStorage.setItem('jwt', data.jwt);
        return data;
      }
    })
    .catch(err => {
      console.log(err)
      /*if (err.statusCode === 400) {
        err.status(400).send({ message: 'Um ou mais campos não foram fornecidos' });
      } else if (err.statusCode === 404) {
        err.status(401).send({ message: 'O usuário com o e-mail especificado não foi encontrado ' });
      }*/
    })
};
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => res.json())
    .then(data => data)
}