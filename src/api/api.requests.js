import api from "./index";

/**
 * Formats the error and returns it instead of throwing
 */
const handleApiError = (error) => {
  console.log("Something went wrong fetching APIs - ", error);

  return {
    data: null,
    // Safely extract the backend error message or fallback to Axios message
    error:
      error.response?.data || error.message || "An unexpected error occurred",
    status: error.response?.status || 500,
    isSuccess: false,
  };
};

/**
 * ================================
 * GET REQUEST
 * ================================
 */
export const getRequest = async (url, params = {}, config = {}) => {
  try {
    const response = await api.get(url, {
      params,
      ...config,
    });
    return {
      data: response.data,
      error: null,
      status: response.status,
      isSuccess: true,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * ================================
 * POST REQUEST
 * ================================
 */
export const postRequest = async (url, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return {
      data: response.data,
      error: null,
      status: response.status,
      isSuccess: true,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * ================================
 * PUT REQUEST
 * ================================
 */
export const putRequest = async (url, data = {}, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return {
      data: response.data,
      error: null,
      status: response.status,
      isSuccess: true,
    };
  } catch (error) {
    return handleApiError(error);
  }
};

/**
 * ================================
 * DELETE REQUEST
 * ================================
 */
export const deleteRequest = async (url, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return {
      data: response.data,
      error: null,
      status: response.status,
      isSuccess: true,
    };
  } catch (error) {
    return handleApiError(error);
  }
};
