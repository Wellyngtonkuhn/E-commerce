import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const { token } = useSelector((state) => state.user);

  if (!token) {
    return <Navigate to='/login' />
  }

  return children 
}
