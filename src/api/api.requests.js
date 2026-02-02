import api from "./index";

/**
 * ================================
 * GET REQUEST
 * ================================
 */
export const getRequest = async (url, params = {}, config = {}) => {
  const response = await api.get(url, {
    params,
    ...config,
  });
  return response.data;
};

/**
 * ================================
 * POST REQUEST
 * ================================
 */
export const postRequest = async (url, data = {}, config = {}) => {
  const response = await api.post(url, data, config);
  return response.data;
};

/**
 * ================================
 * PUT REQUEST
 * ================================
 */
export const putRequest = async (url, data = {}, config = {}) => {
  const response = await api.put(url, data, config);
  return response.data;
};

/**
 * ================================
 * DELETE REQUEST
 * ================================
 */
export const deleteRequest = async (url, config = {}) => {
  const response = await api.delete(url, config);
  return response.data;
};
