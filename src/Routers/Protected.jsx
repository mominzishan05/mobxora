import { Navigate } from "react-router-dom";

const Protected = ({ auth, children }) =>
  auth ? children : <Navigate to="/login" />;

export default Protected;
