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

const ApiService = {
  getCategories,
  getBrands,
  getProducts,
};

export default ApiService;
