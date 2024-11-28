import { buildRequest, buildUrl } from '~/utils/helpers';

async function getCategories() {
  const requestOptions = buildRequest('GET');
  const url = buildUrl('/v1/categories');
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getBrands() {
  const requestOptions = buildRequest('GET');
  const url = buildUrl('/v1/brands');
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getProducts() {
  const requestOptions = buildRequest('GET');
  const url = buildUrl('/v1/products');
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function register(payload, classList) {
  payload['class'] = classList;
  const requestOptions = buildRequest('POST', payload);
  const url = buildUrl('/v1/parent-register');
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function login(payload) {
  const requestOptions = buildRequest('POST', payload);
  const url = buildUrl('/v1/parent-login');
  const response = await fetch(url, requestOptions);
  return await response.json();
}

const ApiService = {
  getCategories,
  getBrands,
  getProducts,
  register,
  login,
};

export default ApiService;
