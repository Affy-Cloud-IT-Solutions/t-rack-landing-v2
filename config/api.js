import axios from "axios";

// const API_URL = 'http://192.168.1.94:8080/api/';
// const BASE_URL = 'http://192.168.1.94:8080/';
// const BASE_URL = 'http://192.168.29.44:8080';
const API_URL = "https://apiv2.t-racktool.com/api/";
export const BASE_URL = "https://apiv2.t-racktool.com/";
export const REDIRECT_URL = "https://app.t-racktool.com/";

export const SEND_OTP = `${API_URL}company/otp/send`;
export const VERIFY_OTP = `${API_URL}company/register/verify-otp`;
export const FORGOT_PASSWORD_OR_RESEND_OTP = `${BASE_URL}request-password-reset`;
export const LOGIN = `${API_URL}login`;
export const UPDATE_PROFILE = `${API_URL}company`;
export const GET_PLANS = `${API_URL}subscription/plans`;
export const CREATE_SUBSCRIPTION = `${API_URL}subscription/create`;
export const GET_ALL_PACKAGES = `${API_URL}packages`;
export const REFRESH_TOKEN = `${API_URL}auth/refresh-token`;

const PUBLIC_ENDPOINTS = [
  SEND_OTP,
  VERIFY_OTP,
  LOGIN,
  REFRESH_TOKEN,
  FORGOT_PASSWORD_OR_RESEND_OTP,
];

// Endpoints that should never receive auth header
const NO_AUTH_ENDPOINTS = [FORGOT_PASSWORD_OR_RESEND_OTP];

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor - don't add token to public endpoints
apiClient.interceptors.request.use(
  (config) => {
    // Build full URL
    const fullUrl = new URL(config.url, config.baseURL).href;

    // Never add auth header for these endpoints
    if (NO_AUTH_ENDPOINTS.includes(fullUrl)) {
      delete config.headers.Authorization;
      return config;
    }

    // Skip token for public endpoints but might still have existing auth header
    if (PUBLIC_ENDPOINTS.includes(fullUrl)) {
      return config;
    }

    // Add token for protected endpoints
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor - handle 401 & refresh token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const fullUrl = new URL(originalRequest.url, originalRequest.baseURL).href;

    if (PUBLIC_ENDPOINTS.includes(fullUrl)) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        const res = await axios.post(REFRESH_TOKEN, { refreshToken });
        const newAccessToken = res.data.accessToken;

        localStorage.setItem("authToken", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        // window.location.href = '/auth/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const handleRedirect = () => {
  const token = localStorage.getItem("authToken");
  const refresh = localStorage.getItem("refreshToken");

  if (token && refresh) {
    const obfuscatedAccessKey = encodeURIComponent(token);
    const obfuscatedRefreshKey = encodeURIComponent(refresh);
    const url = `${REDIRECT_URL}login?xid=${obfuscatedAccessKey}&yref=${obfuscatedRefreshKey}`;
    window.location.href = url;
  }
};

export default apiClient;
