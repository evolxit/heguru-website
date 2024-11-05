export const API_BASEURL = import.meta.env.PUBLIC_API_BASEURL;

export const generateToken = (length = 32) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return token;
};

export const buildRequest = (method: string, payload?: object) => {
  const token = import.meta.env.PUBLIC_API_TOKEN;

  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: method,
    body: JSON.stringify(payload),
  };
};

export const buildUrl = (url: string, params?: any) => {
  const urlParams = params !== null ? '?' + new URLSearchParams(params) : '';

  return API_BASEURL + url + urlParams;
};
