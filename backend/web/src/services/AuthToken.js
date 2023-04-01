import { Outlet, Navigate } from "react-router-dom";

let auth = localStorage.getItem("Token");
console.log(auth, "tokeaaan");
function PrivateOutlet() {
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateOutlet;
