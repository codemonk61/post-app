import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  id: string;
  role: "admin" | "user";
  exp: number;
}

const TOKEN_KEY = "token";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUserFromToken = (): DecodedToken | null => {
  const token = getToken();
  if (!token) return null;
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (err) {
    return null;
  }
};