import type{ ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../../redux/store";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[]; 
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);
    
 
  if (loading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  
  if (!allowedRoles.includes(user.role.toLowerCase())) {
    
    return <Navigate to={user.role.toLowerCase() === 'admin' ? "/admin" : "/employee"} replace />;
  }

  
  return <>{children}</>;
}