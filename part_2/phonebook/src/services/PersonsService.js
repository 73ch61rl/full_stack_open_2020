import axios from 'axios';

const url = 'http://localhost:3001/persons';

const getAll = async () => {
  const request = axios.get(url)
  const response = await request;
  return response.data;
};

const create = async (person) => {
  const request = axios.post(url, person)
  const response = await request;
  return response.data;
};

const update = async (id, person) => {
  const request = axios.put(`${url}/${id}`, person)
  const response = await request;
  return response.data;
};

const destroy = (id) => axios.delete(`${url}/${id}`)

export default { getAll, create, update, destroy }