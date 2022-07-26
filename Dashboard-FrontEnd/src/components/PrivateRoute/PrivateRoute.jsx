import { Routes, Route, Navigate } from "react-router-dom"

const isAuth = true;
const PrivateRoute = ({ children, ...rest }) => {
    if (!isAuth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" />;
      }
    
    return children;
}

export default PrivateRoute