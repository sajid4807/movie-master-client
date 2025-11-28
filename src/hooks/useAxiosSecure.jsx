import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://movie-master-server-eta.vercel.app",
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  useEffect(() => {
    const requestInterceptors = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    return () => {
      instance.interceptors.request.eject(requestInterceptors);
    };
  }, [user]);
  return instance;
};

export default useAxiosSecure;
