import { Navigate } from "react-router-dom"
import ApiContext from "../context/context";
import { useContext } from "react";

const Protect = ({ children }) => {
    const context = useContext(ApiContext)

    if (context.signin === false) {
        return <Navigate to="/" />;
    }
    return children
}
export default Protect