import React from "react";
import { Navigate } from "react-router-dom";
import { getUserFromToken } from "../../utility/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: "admin" | "user";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const user = getUserFromToken();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />; // redirect to home if not correct role
  }

  return <>{children}</>;
};

export default ProtectedRoute;